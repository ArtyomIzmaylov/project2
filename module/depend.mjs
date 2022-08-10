
import {User, UsersCollection} from "./usersWork.mjs";

class Info {
    inform() {
        console.log('Collection has been change')
    }
}


class UserManager {
    constructor(coll) {
        this.coll = coll
    }
    addUser(user) {
        this.coll.add(user)
    }
}
const collection = new UsersCollection()

const userManager = new UserManager(collection)
const user1 = new User('Artyom', '1234', 1)
userManager.addUser(user1)


