


class Bmw {
    constructor(model) {
        this.model = model
        this.text = 'This is mark BMW'
    }
}


class BmwFactory {

    create(model) {
        return new Bmw(model)
    }
}

class X5 {
    info() {
        return `It's X5 Family!`
    }
    constructor() {
        this.name = 'X5'
        this.speed = 100
    }

}

class X4 {
    info() {
        return `It's X5 Family!`
    }

}
const family_X5 = new X5()

const bmwFactory = new BmwFactory()
let bmw5 = bmwFactory.create(family_X5)

console.log(bmw5)
