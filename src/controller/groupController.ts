import { Group } from "../group/group";

export class GroupController {
    groupList: Group[];

    constructor() {
        this.groupList = new Array<Group>();
    }

    addNewGroup(group: Group) : void {
        this.groupList.push(group);
    }

    getGroup(groupId: number): Group {
        for (const group of this.groupList) {
            if (group.id === groupId) {
                return group;
            }
        }
        return null;
    }
}