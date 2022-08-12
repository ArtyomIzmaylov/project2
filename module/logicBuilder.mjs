import {LogicHtmlValue, LogicTrrow, LogicThrowHead, LogicThrow, LogicTable} from "./logicTable.mjs";



class LogicUserTableBuilder {
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
        let logicTable = new LogicTable(trArray)
        return logicTable
    }
    head() {
        const name = new LogicThrowHead(new LogicHtmlValue('Имя'))
        const password = new LogicThrowHead(new LogicHtmlValue('Пароль'))
        const id = new LogicThrowHead(new LogicHtmlValue('ID'))
        const head = [name, password, id]
        return head
    }
    tr (array) {
        const trArray = new LogicTrrow(array)
        return trArray
    }
    th (user) {
        const name = new LogicThrow(new LogicHtmlValue(user.name))
        const password = new LogicThrow(new LogicHtmlValue(user.password))
        const id = new LogicThrow(new LogicHtmlValue(user.id))
        const button = new LogicThrow(new LogicHtmlValue('Удалить'))
        const thArray = [name, password, id, button]
        return thArray
    }
}

export {LogicUserTableBuilder}