var Expense = (function () {
    function Expense(description, expenseAmount, paidBy, splitType, splitDetails) {
        this.expenseId = Expense.generateUniqueId++;
        this.description = description;
        this.expenseAmount = expenseAmount;
        this.paidBy = paidBy;
        this.splitType = splitType;
        this.splitDetails = splitDetails;
    }
    Expense.generateUniqueId = 0;
    return Expense;
}());
export { Expense };
//# sourceMappingURL=expense.js.map