
import {User, UsersCollection} from "./usersWork.mjs";

class Info {
    inform() {
        console.log('Collection has been change')
    }
}


class UserManager {
    constructor(coll, info) {
        this.coll = coll
        this.info = info
    }
    addUser(user) {
        this.coll.add(user)
        this.info.inform()

    }
}
const collection = new UsersCollection()
const info = new Info()
const userManager = new UserManager(collection, info)

const user1 = new User('Artyom', '1234', 1)
userManager.addUser(user1)

console.log(collection)

