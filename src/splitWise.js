import { GroupController } from "./controller/groupController";
import { UserController } from "./controller/userController";
var SplitWise = (function () {
    function SplitWise() {
        this.groupController = new GroupController();
        this.userController = new UserController();
    }
    SplitWise.prototype.run = function () {
        var actionDetails = "\n         1. to create user\n         2. create group\n         3. create expense\n         4. view balance sheet\n        ";
        while (true) {
            try {
                var options = parseInt(prompt(actionDetails));
                console.log(options);
            }
            catch (error) {
            }
        }
    };
    return SplitWise;
}());
export { SplitWise };
//# sourceMappingURL=splitWise.js.map