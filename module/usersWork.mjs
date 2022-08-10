class UsersCollection {
    //add user
    //getId вернуть user
    //delete по ID(добавляю ID,
    users = []
    add(user) {
        this.users.push(user)
    }

    get(id) {
        for (let i in this.users) {
            //console.log(this.users[i])
            if (this.users[i].id === id) {
                return new User(this.users[i].name, this.users[i].password, this.users[i].id)
            }


        }
    }

    delete (id) {
        for (let i = 0; i < this.users.length; i++) {
            //console.log(this.users[i])
            if (this.users[i].id === id) {
                this.users.splice(i, 1)
            }
        }

    }


}
class UserManager {
    constructor(coll, builder) {
        this.coll = coll
        this.builder = builder
    }

    update(user) {
        this.coll.delete(user.id)
        this.coll.add(user)
    }

}


class User {
    constructor(name, password, id) {
        this.name = name
        this.password = password
        this.id = id
    }

}

export {User, UserManager, UsersCollection}