using Microsoft.AspNetCore.Mvc;
using ExpenseTracker.Server.Models;
using System;
using System.Collections.Generic;

namespace ExpenseTracker.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExpensesController : ControllerBase
    {
       
        private static List<Expense> _expenses = new List<Expense>
        {
            new Expense { Id = "e1", Title = "Toilet Paper", Amount = 94.12M, Date = new DateTime(2020, 7, 14) },
            new Expense { Id = "e2", Title = "New TV", Amount = 799.49M, Date = new DateTime(2021, 2, 12) },
            new Expense { Id = "e3", Title = "Car Insurance", Amount = 294.67M, Date = new DateTime(2021, 2, 28) },
            new Expense { Id = "e4", Title = "New Desk (Wooden)", Amount = 450M, Date = new DateTime(2021, 5, 12) }
        };

      
        [HttpGet]
        public IActionResult GetExpenses()
        {
            return Ok(_expenses);
        }

      
        [HttpPost]
        public IActionResult AddExpense([FromBody] Expense newExpense)
        {
            if (newExpense == null)
            {
                return BadRequest("Expense is null.");
            }

           
            newExpense.Id = Guid.NewGuid().ToString();

            
            _expenses.Add(newExpense);

           
            return Ok(newExpense);
        }
    }
}