var GroupController = (function () {
    function GroupController() {
        this.groupList = new Array();
    }
    GroupController.prototype.addNewGroup = function (group) {
        this.groupList.push(group);
    };
    GroupController.prototype.getGroup = function (groupId) {
        for (var _i = 0, _a = this.groupList; _i < _a.length; _i++) {
            var group = _a[_i];
            if (group.id === groupId) {
                return group;
            }
        }
        return null;
    };
    return GroupController;
}());
export { GroupController };
//# sourceMappingURL=groupController.js.map