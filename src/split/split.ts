import { User } from "../user/User";

export class Split { 
    user: User;
    amountOwe: number;

    constructor(user: User, amountOwe: number) {
        this.user = user;
        this.amountOwe =amountOwe;
    }

}