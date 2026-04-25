import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [user, setUser] = useState(() => {
    return localStorage.getItem('student_user') || null;
  });
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('student_expenses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('student_expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    const expenseWithId = { ...newExpense, id: Date.now().toString() };
    setExpenses(prev => [expenseWithId, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  const clearAllExpenses = () => {
    if (window.confirm('Are you sure you want to completely clear all your expense data?')) {
      setExpenses([]);
    }
  };

  const handleLogin = (username) => {
    localStorage.setItem('student_user', username);
    setUser(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('student_user');
    setUser(null);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div style={{ display: showSplash ? 'none' : 'block' }}>
        {!user ? (
          <LoginScreen onLogin={handleLogin} />
        ) : (
          <div className="container">
            <header className="d-flex justify-between align-center" style={{ marginBottom: '1rem', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '400' }}>
                  Hello, {user}.<br/>
                  <span className="text-accent" style={{ color: '#6b63ff' }}>Welcome back.</span>
                </h1>
              </div>
              <div className="d-flex align-center gap-4" style={{ flexWrap: 'wrap' }}>
                <p className="text-muted" style={{ maxWidth: '180px', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  A personal finance tracker built around clarity and structure.
                </p>
                <div className="d-flex flex-column align-center gap-2">
                  <button className="btn btn-primary" onClick={() => document.getElementById('amount')?.focus()}>
                    Start &rarr;
                  </button>
                  <div className="d-flex gap-3">
                    <button 
                      onClick={clearAllExpenses} 
                      style={{ 
                        color: 'rgba(255,255,255,0.4)', 
                        fontSize: '0.8rem', 
                        textDecoration: 'underline'
                      }}
                    >
                      Clear Data
                    </button>
                    <button 
                      onClick={handleLogout} 
                      style={{ 
                        color: 'rgba(255,255,255,0.4)', 
                        fontSize: '0.8rem', 
                        textDecoration: 'underline'
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </header>
            <Dashboard expenses={expenses} onAddExpense={addExpense} onDeleteExpense={deleteExpense} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
