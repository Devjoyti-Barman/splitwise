import { Split } from "../split/split";
import { SplitType } from "../split/splitType";
import { User } from "../user/User";

export class Expense {
    expenseId: number;
    description: string;
    expenseAmount: number;
    paidBy: User;
    splitType: SplitType;
    splitDetails: Split[];
    private static generateUniqueId: number = 0;

    constructor(description: string, expenseAmount: number, paidBy: User, splitType: SplitType,splitDetails: Split[]) {
       this.expenseId = Expense.generateUniqueId++;
       this.description = description;
       this.expenseAmount = expenseAmount;
       this.paidBy = paidBy;
       this.splitType = splitType;
       this.splitDetails = splitDetails;
    }
}