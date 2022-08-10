import {HtmlValue, Table, Throw, ThrowHead, Trrow} from "./htmlTable.mjs";

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
        return table
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
        const button = new Throw(new HtmlValue('Удалить'))
        const thArray = [name, password, id, button]
        return thArray
    }
}


export {UserTableBuilder}