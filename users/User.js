class User {

    constructor(name, password) {
        this.name = name;
        this.password = password
    }

    // set name(name) {
    //     this.name = name.charAt(0).toUpperCase() + name.slice(1);
    //   }
    get name() {
        return this.name;
    }

    sayHello() {
        console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
    }
}

//var justAGuy = new Person();
//justAGuy.name = 'martin'; // The setter will be used automatically here.
//justAGuy.sayHello(); // Will output 'Hello, my name is Martin, I have ID: id_1'





module.exports = User;