import { useState } from 'react';

const CATEGORIES = [
  { id: 'food', label: 'Food' },
  { id: 'travel', label: 'Travel' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'stationery', label: 'Stationery' },
  { id: 'other', label: 'Other' },
];

function AddExpense({ onAddExpense }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('food');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || amount <= 0) return;

    onAddExpense({
      amount: parseFloat(amount),
      category,
      note: note.trim(),
      date: new Date().toISOString()
    });

    setAmount('');
    setNote('');
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '400' }}>Fixed monthly charges</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="amount" className="form-label">Amount (₹)</label>
          <input 
            type="number" 
            id="amount" 
            className="form-input" 
            placeholder="0.00" 
            step="0.01"
            min="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="category" className="form-label">Category</label>
          <select 
            id="category" 
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.label}</option>
            ))}
          </select>
        </div>
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label htmlFor="note" className="form-label">Note (Optional)</label>
          <input 
            type="text" 
            id="note" 
            className="form-input" 
            placeholder="e.g. Figma, Netflix" 
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={40}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '1rem', padding: '1rem' }}>
          Set fixed expenses
        </button>
      </form>
    </div>
  );
}

export default AddExpense;
