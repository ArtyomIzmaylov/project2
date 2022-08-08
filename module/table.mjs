import {Button} from "./tags.mjs";
import {User, UserManager, UsersCollection} from "./usersWork.mjs";
// const table = document.querySelector('table')
// const myInput = document.createElement('tr')
// myInput.innerHTML = `<td>${getUser.name}</td><td>${getUser.password}</td>`
//
//
// table.appendChild(myInput)
// table.appendChild(myInput2)

class Table {
    constructor(trArray) {
        this.trArray = trArray
    }
    html() {
        let string = ''
        this.trArray.forEach(el => {
            string += el.html()
        })

        return `<table>${string}</table>`
    }

}

class Trrow {
    constructor(thArray) {
        this.thArray = thArray
    }

    html() {
        let string = ''
        this.thArray.forEach( el => {
            string += el.html()
        })
        return `<tr>${string}</tr>`
    }
}

class Throw {
    constructor(htmlValue) {
        this.htmlValue = htmlValue
    }
    html() {
        return `<td>${this.htmlValue.html()}</td>`
    }
}

class ThrowHead{
    constructor(htmlValue) {
        this.htmlValue = htmlValue
    }
    html() {
        return `<th>${this.htmlValue.html()}</th>`
    }
}


class HtmlValue {

    constructor(value) {
        this.value = value
    }
    html() {
        return this.value
    }
}




const collection = new UsersCollection()

const user1 = new User('Artyom', '1235', 1)
const user2 = new User('Димка', '1234', 2)
const user3 = new User('Вика', '512', 3)
const user4 = new User('ВАВА', '31415', 3)


class UserTableBuilder {
    constructor(collection) {
        this.collection = collection
    }

    build() {
        const trArray = []
        let headArr = this.head()
        trArray.push(this.tr(headArr))
        this.collection.users.forEach(user => {
            const thArray = this.th(user)
            trArray.push(this.tr(thArray))
        })
        let table = new Table(trArray)
        return table.html()
    }
    head() {
        const name = new ThrowHead(new HtmlValue('Имя'))
        const password = new ThrowHead(new HtmlValue('Пароль'))
        const id = new ThrowHead(new HtmlValue('ID'))
        const head = [name, password, id]
        return head
    }
    tr (array) {
        const trArray = new Trrow(array)
        return trArray
    }
    th (user) {
        const name = new Throw(new HtmlValue(user.name))
        const password = new Throw(new HtmlValue(user.password))
        const id = new Throw(new HtmlValue(user.id))
        const butObj = new Button()
        const button = new Throw(new HtmlValue(butObj.get('Удалить')))
        const thArray = [name, password, id, button]
        return thArray
    }
}


const builder = new UserTableBuilder(collection)

const userManager = new UserManager(collection, builder)

userManager.addUser(user1)

userManager.addUser(user2)
console.log("HAHAHAHA")
userManager.addUser(user3)
console.log("XAXAXA")
console.log(userManager.addUser(user4))

console.dir(builder.table)

