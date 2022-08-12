
import {User, UserManager, UsersCollection} from "./usersWork.mjs";
import {Table, HtmlValue, ThrowHead, Trrow, Throw} from "./htmlTable.mjs";
import {UserTableBuilder} from "./Builder.mjs";

import {LogicTable, LogicThrow, LogicThrowHead, LogicTrrow, LogicHtmlValue} from "./logicTable.mjs";
import {LogicUserTableBuilder} from "./logicBuilder.mjs";

const collection = new UsersCollection()

const user1 = new User('Artyom', '1235', 1)
const user2 = new User('Димка', '1234', 2)
const user3 = new User('Вика', '512', 3)
const user4 = new User('[ЖЕНЯ]', '31415', 3)
const user5 = new User('КОШЁЛОК', '31415', 3)
const user6 = new User('СЯСЯ', '31415', 3)



collection.add(user1)
collection.add(user2)
collection.add(user3)
collection.add(user4)
collection.add(user5)
collection.add(user6)

const builder = new UserTableBuilder(collection)
const logicBuilder = new LogicUserTableBuilder(collection)


const table = builder.build().html()
const logicTable = logicBuilder.build()


console.log(table)
console.log(logicTable)

const div = document.createElement('div')
div.innerHTML = table


document.body.append(div)
