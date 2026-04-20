import { useState } from 'react';
import ExpenseCard from './ExpenseCard';

function ExpenseList({ expenses, onDeleteExpense }) {
  const [filter, setFilter] = useState('all');

  const filteredExpenses = filter === 'all' 
    ? expenses 
    : expenses.filter(exp => exp.category === filter);

  return (
    <div className="d-flex flex-column gap-3" style={{ height: '100%' }}>
      <div className="d-flex justify-between align-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: '400' }}>Spending dynamic</h2>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          style={{ 
            padding: '0.5rem 1rem', 
            borderRadius: '8px', 
            background: 'rgba(0,0,0,0.3)', 
            color: 'white', 
            border: '1px solid rgba(255,255,255,0.2)' 
          }}
        >
          <option value="all">All Categories</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="entertainment">Entertainment</option>
          <option value="stationery">Stationery</option>
          <option value="other">Other</option>
        </select>
      </div>

      {filteredExpenses.length === 0 ? (
        <div className="inner-card" style={{ textAlign: 'center', padding: '3rem', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>
            {expenses.length === 0 ? "No expenses yet. Add one to see the dynamic!" : "No expenses found for this category."}
          </p>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3" style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem' }}>
          {filteredExpenses.map(expense => (
            <ExpenseCard 
              key={expense.id} 
              expense={expense} 
              onDelete={onDeleteExpense} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
