import { Split } from "../split/split";

export interface ISplit {
    validateSplitRequest(splitList: Split[]) : boolean
}