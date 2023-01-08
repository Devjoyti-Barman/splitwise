var UnequalSplit = (function () {
    function UnequalSplit() {
    }
    UnequalSplit.prototype.validateSplitRequest = function (splitList, totalAmount) {
        var sumOfamount = 0;
        for (var _i = 0, splitList_1 = splitList; _i < splitList_1.length; _i++) {
            var split = splitList_1[_i];
            sumOfamount += split.amountOwe;
        }
        if (sumOfamount !== totalAmount) {
            throw Error('The split amount is not equal to total amount');
        }
    };
    return UnequalSplit;
}());
export { UnequalSplit };
//# sourceMappingURL=UnequalSplit.js.map