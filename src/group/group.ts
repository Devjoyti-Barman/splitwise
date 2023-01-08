import { Expense } from "../expense/expense";
import { User } from "../user/User";

export class Group {
    id: number;
    groupName: string;
    users: User[];
    expenses: Expense[]; 
    private static generateUniqueId: number = 0;

    constructor() {
        this.id = Group.generateUniqueId++;
        this.users = new Array<User>();
        this.expenses = new Array<Expense>();
    }

    addMember(member: User) {
        this.users.push(member);
    }

    getGroupId(): number {
        return this.id;
    }
    
    setGroupName(name: string) {
        this.groupName = name;
    }

}