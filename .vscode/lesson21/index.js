// Создание класса и его экземпляра
class Wizard {
    constructor(name, house) {
        this.name = name;
        this.house = house;
    }

     introduce(){
        console.log(`I'm ${this.name} from ${this.house} house`);
     }
}

const harry = new Wizard('Harry Potter', 'Griffindor'); //экземляр класса - обьект harry

harry.introduce();
console.log(harry);