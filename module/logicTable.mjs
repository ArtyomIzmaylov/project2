


class LogicTable {
    constructor(children) {
        this.children = children
        this.tagName = 'table'
        this.atr = {}
    }
    get() {
        return this
    }
}


class LogicTrrow {
    constructor(children) {
        this.children = children
        this.tagName = 'tr'
        this.atr = {}
    }
}


class LogicThrowHead {

    constructor(htmlValue) {
        this.children = htmlValue
        this.TagName = 'td'
        this.atr = {}
    }

}



class LogicThrow {

    constructor(htmlValue) {
        this.children = htmlValue
        this.TagName = 'td'
        this.atr = {}
    }

}


class LogicHtmlValue {
    constructor(value) {
        this.value = value
    }
}




const htmlValue1 = new LogicHtmlValue('Артём')
const htmlValue2 = new LogicHtmlValue('12345')
const htmlValue3 = new LogicHtmlValue('1')

const htmlValue4 = new LogicHtmlValue('Димка')
const htmlValue5 = new LogicHtmlValue('12345')
const htmlValue6 = new LogicHtmlValue('2')





const th1 = new LogicThrow(htmlValue1)
const th2 = new LogicThrow(htmlValue2)
const th3 = new LogicThrow(htmlValue3)

const th4 = new LogicThrow(htmlValue4)
const th5 = new LogicThrow(htmlValue5)
const th6 = new LogicThrow(htmlValue6)


const thArray1 = [th1,th2,th3]
const thArray2 = [th4,th5,th6]

const tr1 = new LogicTrrow(thArray1)
const tr2 = new LogicTrrow(thArray2)

const trArray = [tr1, tr2]

const logicTable = new LogicTable(trArray)


console.log(logicTable.children[0].children)

export {LogicTable, LogicThrow, LogicThrowHead, LogicTrrow, LogicHtmlValue}