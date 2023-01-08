export class User {
    userId: number;
    userName: string;
    private static generateUniqueId = 0;
    
    constructor() {
        this.userId = User.generateUniqueId++;
    }
}