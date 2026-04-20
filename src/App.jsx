import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';

function App() {
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

  return (
    <div className="container">
      <header className="d-flex justify-between align-center" style={{ marginBottom: '1rem', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '400' }}>
            Your finances.<br/>
            <span className="text-accent" style={{ color: '#6b63ff' }}>Clearly structured.</span>
          </h1>
        </div>
        <div className="d-flex align-center gap-4">
          <p className="text-muted" style={{ maxWidth: '180px', fontSize: '0.9rem', lineHeight: '1.4' }}>
            A personal finance tracker built around clarity and structure.
          </p>
          <button className="btn btn-primary" onClick={() => document.getElementById('amount')?.focus()}>
            Start &rarr;
          </button>
        </div>
      </header>
      <Dashboard expenses={expenses} onAddExpense={addExpense} onDeleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
