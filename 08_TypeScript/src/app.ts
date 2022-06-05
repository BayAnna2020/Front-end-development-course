interface Entity {
    _species: string;
    _color: string;
    _weight: number;
    _placeOfPoop: string;
}

class Animal implements Entity {
    public _species: string;
    public _color: string;
    public _weight: number;
    public _placeOfPoop: string;

    get species() : string {
        return this._species;
    }

    set species(value) {
            this._species = value;
    }

    get color() : string {
        return this._color;
    }

    set color(value) {
            this._color = value;
    }

    get weight() : number {
        return this._weight;
    }

    set weight(value) {
            this._weight = value;
    }

    get placeOfPoop() : string {
        return this._placeOfPoop;
    }

    set placeOfPoop(value) {
            this._placeOfPoop = value;
    }

    constructor(species : string, color : string, weight : number) {
        this.species = species;
        this.color = color;
        this.weight = weight;
    }
}

//Объединение типов
type nameType = string | number;

class Pet extends Animal {
    public _name: nameType;
    


    get name() : nameType {
        return this._name;
    }

    set name(value) {
        if (value != null && value !== "") {
            this._name = value;
        } else {
            console.log("Некорректное значение!");
        }
    }

    constructor(name : nameType, species : string, color : string, weight : number) {
        super(species, color, weight);
        this.name = name;
    }

    getInfo() {
        console.log("Имя:", this.name + ", Порода:", this.species + ", Окрас:", this.color + ", Вес:", this.weight + " кг");
    }

    doPoop() {
        console.log(this.name + " какает " + this.placeOfPoop);
    }
}

class Cat extends Pet {
    _placeOfPoop : string = "в лоток";
    public cost: number;
    public family : string;

    voice() {
        console.log(this.name + " говорит - мяу");
    }

    constructor(name : nameType, species : string, color : string, weight : number, family : string, cost : number) {
        super(name, species, color, weight);
        super.placeOfPoop = this.placeOfPoop;
        this.family = "Кошка";
        this.cost = 500;

    }
}

class Dog extends Pet {
    _placeOfPoop = "на улице";
    public cost: number;
    public family : string;

    voice() {
        console.log(this.name + " говорит - гав");
    }

    constructor(name : nameType, species : string, color : string, weight : number, family : string, cost : number) {
        super(name, species, color, weight);
        super.placeOfPoop = this.placeOfPoop;
        this.family = "Собака"
        this.cost = 1000;
    }
}

class GuideDog extends Dog {
    helpToOwner() {
        console.log("Помогает слепому хозяину");
    }

    constructor(name : nameType, species : string, color : string, weight : number, family : string, cost : number) {
        super(name, species, color, weight, family, cost);
        this.family = "Собака-поводырь"
        this.cost = 2000;
    }
}

class PetShop {
    public _pets: any;

    get pets() : any {
        return this._pets;
    }

    set pets(value) {
        if (value != null && value[0] instanceof Pet) {
            this._pets = value;
        } else {
            alert("Некорректное значение!");
        }
    }

    constructor(pets : any) {
        this.pets = pets;
    }

    petFoundHisHome(pet : any) {
        if (this._pets.find(e => e === pet)) {
            console.log(`${pet.name} поедет домой!`)
            const indexOFHappyPet = this._pets.indexOf(pet);
            if (indexOFHappyPet > -1)
                this._pets.splice(indexOFHappyPet, 1)
        } else {
            console.log(`${pet.name} уже дома!`)
        }
    }
}

//Декоратор
function classDecorator<T extends {new(...arg:any[]):{}}>(constructor:T) {
    const newConstructor: Function = function (name: string) {
        this.name = 'Hello, ' + name;
    };
    console.log(`object create ${constructor}` );
    return constructor;
}

//фабричный метод
@classDecorator
class MemberFactory {
    static list = {
      catObjects: Cat,
      dogObjects: Dog,
      guideDogObjects: GuideDog
    }
  
    create(name : nameType = 'Безымянный', type : string = 'catObjects') {
      const Membership = MemberFactory.list[type] || MemberFactory.list.catObjects;
      const member = new Membership(name);
      member.type = type;
      member.define = function() {
        console.log(`${this.name} (${this.type}): ${this.cost} рублей`);
      }
      return member;
    }
  }
  
  const factory = new MemberFactory()
  
  const members = [
    factory.create('Василиса', 'catObjects'),
    factory.create('Шарик', 'dogObjects'),
    factory.create(911, 'guideDogObjects'),
    factory.create("Арчибальд", 'guideDogObjects'),
    factory.create()
  ]
  
  members.forEach(m => {
    m.define();
  })


console.log("***************************************");
  
let murzik : Cat = new Cat("Мурзик", "Персидский кот", "Рыжий", 4.5, "кот", 500);
murzik.getInfo();
murzik.weight = 5;
murzik.getInfo();
console.log(murzik);
murzik.voice();
murzik.doPoop();

console.log("***************************************");

let vasya : Cat = new Cat("Вася", "Маскарадный кот", "Серый", 3.6, "кот", 600);
vasya.getInfo();
console.log(vasya);
vasya.voice();
vasya.doPoop();

console.log("***************************************");

let sharik : Dog = new Dog("Шарик", "Дворянин", "Белый", 10, "собака", 1500);
console.log(sharik);
sharik.getInfo();
sharik.voice();
sharik.doPoop();

console.log("***************************************");

let pesboss : GuideDog = new GuideDog(3107, "Лабрадор", "Черный", 40, "собака-поводырь", 3500);
console.log(pesboss);
pesboss.getInfo();
pesboss.voice();
pesboss.doPoop();
pesboss.helpToOwner();

console.log("***************************************");

let listOfAnimals : any = [];
listOfAnimals.push(murzik, vasya);

let petShop : any = new PetShop(listOfAnimals);
console.log(petShop.pets);
petShop.petFoundHisHome(vasya);
petShop.petFoundHisHome(vasya);
console.log(petShop.pets);
  

