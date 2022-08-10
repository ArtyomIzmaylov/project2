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
    get() {
        return this
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


export {Table, Trrow, Throw, ThrowHead, HtmlValue}