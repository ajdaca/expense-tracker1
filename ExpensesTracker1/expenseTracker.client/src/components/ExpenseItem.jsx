import React from 'react';

function ExpenseItem({ expense }) {
    if (!expense || !expense.date) {
        console.error('Expense or expense.date is undefined', expense);
        return null;
    }

    const expenseDate = new Date(expense.date); 

    return (
        <li>
            <div>{expenseDate.toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</div>
            <div>{expense.title}</div>
            <div>${expense.amount}</div>
        </li>
    );
}

export default ExpenseItem;