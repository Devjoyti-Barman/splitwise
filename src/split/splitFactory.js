import { EqualSplit } from "./EqualSplit";
import { PercentageSplit } from "./PercentageSplit";
import { SplitType } from "./splitType";
import { UnequalSplit } from "./UnequalSplit";
var SplitFactory = (function () {
    function SplitFactory() {
    }
    SplitFactory.getSplitObject = function (splittype) {
        switch (splittype) {
            case SplitType.EQUAL:
                return new EqualSplit();
            case SplitType.UNEQUAL:
                return new UnequalSplit();
            case SplitType.PERCENTAGE:
                return new PercentageSplit();
            default:
                return null;
        }
    };
    return SplitFactory;
}());
export { SplitFactory };
//# sourceMappingURL=splitFactory.js.map