import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ items }) {
    
    console.log('ExpenseList received items:', items);


    const validItems = items.filter(expense => {
        const isValid = expense && expense.date;
        if (!isValid) {
            console.warn('Invalid expense detected and filtered out:', expense);
        }
        return isValid;
    });


    console.log('ExpenseList rendering with valid items:', validItems);

   
    if (validItems.length === 0) {
        return <h2>No expenses found.</h2>;
    }

    return(
        <ul>
            {validItems.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </ul>
    );
}

export default ExpenseList;