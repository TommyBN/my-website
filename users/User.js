

class User {

    constructor(name, password) {
        this.name = name;
        this.password = /**bcrypt */ password;
        this.todos = [];
        this.events = [];
        this.jobPlaces = [];
    }
    
    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get password() {
        return this.password;
    }

    // sayHello() {
    //     console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
    // }
}

//var justAGuy = new User(nbs,ma);
//justAGuy.name = 'martin'; // The setter will be used automatically here.
//justAGuy.sayHello(); // Will output 'Hello, my name is Martin, I have ID: id_1'





module.exports = User;