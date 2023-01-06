import { ExpenseType } from "./expenseType";

export abstract class Expense {
    title: string;
    expenseId: string;
    users: string[];
    expenseType: ExpenseType;
}