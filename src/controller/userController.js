var UserController = (function () {
    function UserController() {
        this.userList = new Array();
    }
    UserController.prototype.getUser = function (userId) {
        for (var _i = 0, _a = this.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.userId === userId) {
                return user;
            }
        }
        return null;
    };
    UserController.prototype.getAllUsers = function () {
        return this.userList;
    };
    return UserController;
}());
export { UserController };
//# sourceMappingURL=userController.js.map