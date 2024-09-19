import React from 'react';

function ExpenseFilter({ selectedYear, onYearChange }) {
    return (
        <div>
            <label>Filter by year</label>
            <select value={selectedYear} onChange={(e) => onYearChange(e.target.value)}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>
        </div>
    );
}

export default ExpenseFilter;