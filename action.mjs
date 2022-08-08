import {User, UserManager, UsersCollection} from "./module/usersWork.mjs";
import {Table} from "./module/table.mjs";
import {hash} from "./module/hash.mjs";

const collection = new UsersCollection()
const userManager = new UserManager(collection)
const table = new Table()


const deleteForm = (event) => {
    const deleteId = event.currentTarget.id
    collection.delete(deleteId)
}

const checkForm = (event) => {
    event.preventDefault()
    const element = document.getElementById("main-form")
    const name = element.name.value
    const password = element.pass.value
    const user = new User(name, password, hash.generate())
    collection.add(user)
}


document.getElementById('main-form').addEventListener("submit", checkForm)
