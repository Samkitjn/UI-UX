import ExpenseCard from './ExpenseCard';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="d-flex flex-column gap-3" style={{ height: '100%' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: '400' }}>Spending dynamic</h2>
      {expenses.length === 0 ? (
        <div className="inner-card" style={{ textAlign: 'center', padding: '3rem', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>No expenses yet. Add one to see the dynamic!</p>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3" style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem' }}>
          {expenses.map(expense => (
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
