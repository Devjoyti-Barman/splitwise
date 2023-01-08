var EqualSplit = (function () {
    function EqualSplit() {
    }
    EqualSplit.prototype.validateSplitRequest = function (splitList, totalAmount) {
        var amountShouldBePresent = totalAmount / splitList.length;
        for (var _i = 0, splitList_1 = splitList; _i < splitList_1.length; _i++) {
            var split = splitList_1[_i];
            if (split.amountOwe !== amountShouldBePresent) {
                throw Error('Total amount cannot be split into ' + splitList.length + 'persons');
            }
        }
    };
    return EqualSplit;
}());
export { EqualSplit };
//# sourceMappingURL=EqualSplit.js.map