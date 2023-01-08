import { User } from "../user/User";

export class UserController {
    userList: User[];

    constructor() {
        this.userList = new Array<User>();
    }

    getUser(userId: number) : User {
        for (const user of this.userList) {
            if (user.userId === userId) {
                return user;
            }
        }
        return null;
    }

    getAllUsers() : User[] {
        return this.userList;
    }
}