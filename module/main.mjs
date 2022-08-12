

class Button {
    get(value) {
        return `<button>${value}</button>`
    }
}

class Link {
    constructor(attribute) {
        this.attr = attribute
    }
    get(value) {
        return `<a>${value}</a>`
    }
}

class Attribute {
    value;
}

class AttributeManager {
    constructor(attribute) {
        this.attribute = attribute
    }
    setValue
}

const id = new Attribute()


const elem = document.createElement('a')


