function ExpenseCard({ expense, onDelete }) {
  const date = new Date(expense.date).toLocaleDateString(undefined, { 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <div className="inner-card d-flex justify-between align-center">
      <div className="d-flex flex-column gap-1">
        <div className="d-flex align-center gap-2">
          <span style={{ fontSize: '0.875rem', fontWeight: '500', color: 'rgba(255,255,255,0.7)' }}>{date}</span>
          <span style={{ 
            fontSize: '0.75rem', 
            padding: '0.2rem 0.6rem', 
            borderRadius: '4px',
            backgroundColor: 'rgba(255,255,255,0.15)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            fontWeight: '600'
          }}>
            {expense.category}
          </span>
        </div>
        {expense.note && (
          <p style={{ fontSize: '1.05rem', color: '#fff', marginTop: '0.25rem' }}>{expense.note}</p>
        )}
      </div>
      <div className="d-flex align-center gap-3">
        <span style={{ fontWeight: '600', fontSize: '1.25rem', color: '#fff' }}>
          ₹{expense.amount.toFixed(2)}
        </span>
        <button 
          onClick={() => onDelete(expense.id)}
          style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.5rem', padding: '0 0.5rem' }}
          title="Delete"
          onMouseEnter={(e) => e.target.style.color = '#ef4444'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default ExpenseCard;
