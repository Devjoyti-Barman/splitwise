import { Split } from "../split/split";

export interface IExpensiveSplit {
    validateSplitRequest(splitList: Split[], totalAmount: number): void;
}