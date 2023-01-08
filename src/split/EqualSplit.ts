import { IExpensiveSplit } from "../interface/IExpensiveSplit";
import { Split } from "./split";

export class EqualSplit implements IExpensiveSplit{
    validateSplitRequest(splitList: Split[], totalAmount: number): void {
        const amountShouldBePresent: number = totalAmount/splitList.length;

        for (const split of splitList) {
            if (split.amountOwe !== amountShouldBePresent) {
                throw Error('Total amount cannot be split into '+ splitList.length+ 'persons');
            }
        }
    }
}                              