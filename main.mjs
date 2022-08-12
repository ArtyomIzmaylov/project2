import {User, UserManager, UsersCollection} from "./trash/array_new.mjs";
import {Table} from "./module/first.mjs";





const collection = new UsersCollection()
const userManager = new UserManager(collection)





const user = new User('Artyom', '31415', 1)
const user2 = new User('Pizdyc', '31415', 2)
const user3 = new User('Egiir', '1234', 3)


const table = new Table(collection.users)

