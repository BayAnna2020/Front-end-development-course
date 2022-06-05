var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MemberFactory_1;
class Animal {
    constructor(species, color, weight) {
        this.species = species;
        this.color = color;
        this.weight = weight;
    }
    get species() {
        return this._species;
    }
    set species(value) {
        this._species = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    get placeOfPoop() {
        return this._placeOfPoop;
    }
    set placeOfPoop(value) {
        this._placeOfPoop = value;
    }
}
class Pet extends Animal {
    constructor(name, species, color, weight) {
        super(species, color, weight);
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value != null && value !== "") {
            this._name = value;
        }
        else {
            console.log("Некорректное значение!");
        }
    }
    getInfo() {
        console.log("Имя:", this.name + ", Порода:", this.species + ", Окрас:", this.color + ", Вес:", this.weight + " кг");
    }
    doPoop() {
        console.log(this.name + " какает " + this.placeOfPoop);
    }
}
class Cat extends Pet {
    constructor(name, species, color, weight, family, cost) {
        super(name, species, color, weight);
        this._placeOfPoop = "в лоток";
        super.placeOfPoop = this.placeOfPoop;
        this.family = "Кошка";
        this.cost = 500;
    }
    voice() {
        console.log(this.name + " говорит - мяу");
    }
}
class Dog extends Pet {
    constructor(name, species, color, weight, family, cost) {
        super(name, species, color, weight);
        this._placeOfPoop = "на улице";
        super.placeOfPoop = this.placeOfPoop;
        this.family = "Собака";
        this.cost = 1000;
    }
    voice() {
        console.log(this.name + " говорит - гав");
    }
}
class GuideDog extends Dog {
    helpToOwner() {
        console.log("Помогает слепому хозяину");
    }
    constructor(name, species, color, weight, family, cost) {
        super(name, species, color, weight, family, cost);
        this.family = "Собака-поводырь";
        this.cost = 2000;
    }
}
class PetShop {
    constructor(pets) {
        this.pets = pets;
    }
    get pets() {
        return this._pets;
    }
    set pets(value) {
        if (value != null && value[0] instanceof Pet) {
            this._pets = value;
        }
        else {
            alert("Некорректное значение!");
        }
    }
    petFoundHisHome(pet) {
        if (this._pets.find(e => e === pet)) {
            console.log(`${pet.name} поедет домой!`);
            const indexOFHappyPet = this._pets.indexOf(pet);
            if (indexOFHappyPet > -1)
                this._pets.splice(indexOFHappyPet, 1);
        }
        else {
            console.log(`${pet.name} уже дома!`);
        }
    }
}
//Декоратор
function classDecorator(constructor) {
    const newConstructor = function (name) {
        this.name = 'Hello, ' + name;
    };
    console.log(`object create ${constructor}`);
    return constructor;
}
//фабричный метод
let MemberFactory = MemberFactory_1 = class MemberFactory {
    create(name = 'Безымянный', type = 'catObjects') {
        const Membership = MemberFactory_1.list[type] || MemberFactory_1.list.catObjects;
        const member = new Membership(name);
        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost} рублей`);
        };
        return member;
    }
};
MemberFactory.list = {
    catObjects: Cat,
    dogObjects: Dog,
    guideDogObjects: GuideDog
};
MemberFactory = MemberFactory_1 = __decorate([
    classDecorator
], MemberFactory);
const factory = new MemberFactory();
const members = [
    factory.create('Василиса', 'catObjects'),
    factory.create('Шарик', 'dogObjects'),
    factory.create(911, 'guideDogObjects'),
    factory.create("Арчибальд", 'guideDogObjects'),
    factory.create()
];
members.forEach(m => {
    m.define();
});
console.log("***************************************");
let murzik = new Cat("Мурзик", "Персидский кот", "Рыжий", 4.5, "кот", 500);
murzik.getInfo();
murzik.weight = 5;
murzik.getInfo();
console.log(murzik);
murzik.voice();
murzik.doPoop();
console.log("***************************************");
let vasya = new Cat("Вася", "Маскарадный кот", "Серый", 3.6, "кот", 600);
vasya.getInfo();
console.log(vasya);
vasya.voice();
vasya.doPoop();
console.log("***************************************");
let sharik = new Dog("Шарик", "Дворянин", "Белый", 10, "собака", 1500);
console.log(sharik);
sharik.getInfo();
sharik.voice();
sharik.doPoop();
console.log("***************************************");
let pesboss = new GuideDog(3107, "Лабрадор", "Черный", 40, "собака-поводырь", 3500);
console.log(pesboss);
pesboss.getInfo();
pesboss.voice();
pesboss.doPoop();
pesboss.helpToOwner();
console.log("***************************************");
let listOfAnimals = [];
listOfAnimals.push(murzik, vasya);
let petShop = new PetShop(listOfAnimals);
console.log(petShop.pets);
petShop.petFoundHisHome(vasya);
petShop.petFoundHisHome(vasya);
console.log(petShop.pets);
//# sourceMappingURL=app.js.map