import { IExpensiveSplit } from "../interface/IExpensiveSplit";
import { Split } from "./split";

export class PercentageSplit implements IExpensiveSplit {
    validateSplitRequest(splitList: Split[], totalAmount: number): void {
        
    }
}