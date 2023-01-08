import { IExpensiveSplit } from "../interface/IExpensiveSplit";
import { Split } from "./split";

export class UnequalSplit implements IExpensiveSplit {
    validateSplitRequest(splitList: Split[], totalAmount: number): void {
        let sumOfamount: number = 0;
        for (const split of splitList) {
            sumOfamount += split.amountOwe;
        }
        if (sumOfamount !== totalAmount) {
            throw Error('The split amount is not equal to total amount');
        }
    }
} 