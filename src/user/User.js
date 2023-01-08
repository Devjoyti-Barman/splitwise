var User = (function () {
    function User() {
        this.userId = User.generateUniqueId++;
    }
    User.generateUniqueId = 0;
    return User;
}());
export { User };
//# sourceMappingURL=User.js.map