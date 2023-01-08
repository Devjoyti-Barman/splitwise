import { EqualSplit } from "./EqualSplit";
import { PercentageSplit } from "./PercentageSplit";
import { SplitType } from "./splitType";
import { UnequalSplit } from "./UnequalSplit";

export class SplitFactory {

    public static getSplitObject(splittype: SplitType) {
        switch(splittype) {
            case SplitType.EQUAL:
                return new EqualSplit();
            case SplitType.UNEQUAL:
                return new UnequalSplit();
            case SplitType.PERCENTAGE:
                return new PercentageSplit();
            default:
                return null;
        }
    }
}