import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import './App.css'; 

function App() {
    const [expenses, setExpenses] = useState([]);
    const [filteredYear, setFilteredYear] = useState('2021');
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        console.log('Fetching expenses from the backend...');
        fetch('http://localhost:5104/api/expenses')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch expenses');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched expenses:', data);
                setExpenses(data);
            })
            .catch(error => {
                console.error('Error fetching expenses:', error);
            });
    }, []);

    const addExpenseHandler = (expense) => {
        fetch('http://localhost:5104/api/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(expense),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add expense');
                }
                return response.json();
            })
            .then(newExpense => {
                console.log('New expense added:', newExpense);
                setExpenses(prevExpenses => [...prevExpenses, newExpense]);
                setShowForm(false);
            })
            .catch(error => {
                console.error('Error adding expense:', error);
            });
    };

    const yearChangeHandler = (year) => {
        setFilteredYear(year);
    };

    const filteredExpenses = expenses.filter(expense =>
        new Date(expense.date).getFullYear().toString() === filteredYear
    );

    console.log('Filtered expenses:', filteredExpenses);

    return (
        <div className="app-container">
            <div className="header">
                <h1>Expense Tracker</h1>
                <button className="add-expense-button" onClick={() => setShowForm(prev => !prev)}>
                    {showForm ? 'Cancel' : 'Add new expense'}
                </button>
            </div>
            {showForm && (
                <ExpenseForm onAddExpense={addExpenseHandler} onCancel={() => setShowForm(false)} />
            )}
            <ExpenseFilter selectedYear={filteredYear} onYearChange={yearChangeHandler} />
            <ExpenseList items={filteredExpenses} />
        </div>
    );
}

export default App;
