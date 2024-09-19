using System;

namespace ExpensesTracker1.Models
{
    public class Expense
    {
        public string? Id { get; set; }
        public string? Title { get; set; }
        public decimal? Amount { get; set; }
        public DateTime? Date { get; set; }
    }
}
