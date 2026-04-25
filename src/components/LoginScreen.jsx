import { useState, useEffect } from 'react';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }
    // Simple simulated login: accept any non-empty credentials
    onLogin(username);
  };

  return (
    <div 
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}
    >
      <div 
        className="bento-card card-purple" 
        style={{ 
          maxWidth: '400px', 
          width: '100%',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Welcome.</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Please sign in to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="form-input"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ padding: '0.75rem 1rem' }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '0.75rem 1rem' }}
            />
          </div>

          {error && (
            <p style={{ color: '#fb7185', fontSize: '0.875rem', marginTop: '-0.5rem', textAlign: 'center' }}>
              {error}
            </p>
          )}

          <button 
            type="submit" 
            className="btn btn-primary btn-block" 
            style={{ 
              marginTop: '1rem',
              backgroundColor: '#fff',
              color: 'var(--accent-purple)',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
