
import {User, UserManager, UsersCollection} from "./usersWork.mjs";
import {Table, HtmlValue, ThrowHead, Trrow, Throw} from "./htmlTable.mjs";
import {UserTableBuilder} from "./Builder.mjs";

const collection = new UsersCollection()

const user1 = new User('Artyom', '1235', 1)
const user2 = new User('Димка', '1234', 2)
const user3 = new User('Вика', '512', 3)
const user4 = new User('ВАВА', '31415', 3)




collection.add(user1)
collection.add(user2)
collection.add(user3)
collection.add(user4)

const builder = new UserTableBuilder(collection)

const table = builder.build().html()
console.log(table)