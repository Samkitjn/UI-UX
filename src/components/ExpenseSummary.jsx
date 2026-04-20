function ExpenseSummary({ expenses }) {
  // Calculate totals
  const today = new Date().toLocaleDateString();
  
  // Weekly total (last 7 days)
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  let dailyTotal = 0;
  let weeklyTotal = 0;
  const categoryTotals = {
    food: 0,
    travel: 0,
    entertainment: 0,
    stationery: 0,
    other: 0
  };

  expenses.forEach(exp => {
    const expDate = new Date(exp.date);
    if (expDate.toLocaleDateString() === today) dailyTotal += exp.amount;
    if (expDate >= sevenDaysAgo) weeklyTotal += exp.amount;
    if (categoryTotals[exp.category] !== undefined) categoryTotals[exp.category] += exp.amount;
  });

  const totalAllTime = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div style={{ padding: '2.5rem' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: '400' }}>Visualization.</h2>
      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: '1.4' }}>
        Draw numbers into meaningful insights.<br/>
        Make informed decisions with confidence.
      </p>

      <div className="inner-card" style={{ backgroundColor: 'rgba(0,0,0,0.15)', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>Weekly trend <span style={{color: '#4ade80'}}>+12% &uarr;</span></p>
        <div style={{ fontSize: '2rem', fontWeight: '600' }}>₹{weeklyTotal.toFixed(2)}</div>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>More than last week</p>
      </div>

      <div className="inner-card" style={{ backgroundColor: 'rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '500', color: 'rgba(255,255,255,0.8)' }}>Monthly spending tracker</h3>
        <div className="d-flex flex-column gap-3">
          {Object.entries(categoryTotals).map(([cat, amount]) => {
            const percentage = totalAllTime > 0 ? (amount / totalAllTime) * 100 : 0;
            if (amount === 0) return null;
            
            return (
              <div key={cat}>
                <div className="d-flex justify-between" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.3rem' }}>
                  <span style={{ textTransform: 'capitalize' }}>{cat}</span>
                  <span>₹{amount.toFixed(2)}</span>
                </div>
                <div className="progress-container" style={{ height: '6px', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                  <div 
                    className={`progress-bar cat-${cat}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
          {totalAllTime === 0 && (
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>Add expenses to visualize</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExpenseSummary;
