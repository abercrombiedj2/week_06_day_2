const Person = function (name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hi! My name is ${this.name}`)
}

const shaggy = new Person('Shaggy Rogers');
shaggy.greet();

const velma = new Person('Velma Dinkley');
velma.greet();

console.log(Object.getPrototypeOf(shaggy));