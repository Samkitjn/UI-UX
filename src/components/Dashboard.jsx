import AddExpense from './AddExpense';
import ExpenseSummary from './ExpenseSummary';
import ExpenseList from './ExpenseList';

function Dashboard({ expenses, onAddExpense, onDeleteExpense }) {
  return (
    <div className="bento-grid">
      {/* Span 2 - Large Orange Block for the List */}
      <div className="bento-card card-orange col-span-2 row-span-2 d-flex flex-column gap-4">
        <ExpenseList expenses={expenses} onDeleteExpense={onDeleteExpense} />
      </div>
      
      {/* Top right - Add Expense Form */}
      <div className="bento-card">
        <AddExpense onAddExpense={onAddExpense} />
      </div>

      {/* Bottom right - Summary Cards (Purple) */}
      <div className="bento-card card-purple d-flex flex-column gap-3" style={{ padding: 0 }}>
         <ExpenseSummary expenses={expenses} />
      </div>
    </div>
  );
}

export default Dashboard;
