import React, { useState } from 'react';

function ExpenseForm({ onAddExpense, onCancel }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };
        onAddExpense(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <button type="submit">Add Expense</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
}

export default ExpenseForm;