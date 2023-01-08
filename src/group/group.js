var Group = (function () {
    function Group() {
        this.id = Group.generateUniqueId++;
        this.users = new Array();
        this.expenses = new Array();
    }
    Group.prototype.addMember = function (member) {
        this.users.push(member);
    };
    Group.prototype.getGroupId = function () {
        return this.id;
    };
    Group.prototype.setGroupName = function (name) {
        this.groupName = name;
    };
    Group.generateUniqueId = 0;
    return Group;
}());
export { Group };
//# sourceMappingURL=group.js.map