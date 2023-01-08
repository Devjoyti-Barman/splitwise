import { GroupController } from "./controller/groupController";
import { UserController } from "./controller/userController";

export class SplitWise {
    private groupController: GroupController;
    private userController: UserController;

    constructor() {
        this.groupController = new GroupController();
        this.userController = new UserController();
    }

    run() : void {
        const actionDetails: string = `
         1. to create user
         2. create group
         3. create expense
         4. view balance sheet
        `
        while(true) {
            try {
               const options: number = parseInt(prompt(actionDetails)); 
               console.log(options);
            } catch (error) {
                
            }
        }
    }
}