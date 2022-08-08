


class HashGenerator {
    chars =['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G'];
    constructor(hashLenght = 5) {
        this.hashLenght = hashLenght
    }

    generate() {
        this.res = "OBJECT_"
        for (let i = 0; i < this.hashLenght; i++) {
            let id = Math.ceil(Math.random() * 10);
            this.res += this.chars[id];
        }
        return this.res
    }
}



const hash = new HashGenerator()


export {hash}