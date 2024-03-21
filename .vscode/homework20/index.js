// Определяем конструктор character
function Character(name, health, level) {
    this.name = name;
    this.health = health;
    this.level = level;
  }
  // Добавляем метод introduce в prototype character
  Character.prototype.introduce = function() {
    console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
  };
  // Создаем объект warrior, наследующий свойства и методы от character
  function Warrior(name, health, level, weapon) {
    Character.call(this, name, health, level);
    this.weapon = weapon;
  }
  // Наследование методов
  Warrior.prototype = Object.create(Character.prototype);
  Warrior.prototype.constructor = Warrior;
  // Добавляем метод attack для warrior
  Warrior.prototype.attack = function() {
    console.log(`I am attacking with ${this.weapon}!`);
  };
  // Создаем объект wizard, наследующий свойства и методы от character
  function Wizard(name, health, level, spell) {
    Character.call(this, name, health, level);
    this.spell = spell;
  }
  // Наследование методов
  Wizard.prototype = Object.create(Character.prototype);
  Wizard.prototype.constructor = Wizard;
  // Добавляем метод castSpell для wizard
  Wizard.prototype.castSpell = function() {
    console.log(`I am casting ${this.spell}!`);
  };
  // Создаем экземпляры персонажей
  const warrior = new Warrior("Warrior", 100, 10, "Sword");
  const wizard = new Wizard("Wizard", 80, 8, "Fireball");
  // Вызываем методы introduce, attack и castSpell
  warrior.introduce();
  warrior.attack();
  wizard.introduce();
  wizard.castSpell();

//вариант 2

  const character = {
    name: "User",
    health: 100,
    level: 1,
    introduce() {
        console.log(
            `Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`
            );
        },
    };

    const warrior = {
        __proto__: character,
        name: "Conan",
        health: 90,
        level: 10,
        weapon: "Sword",
        attack() {
            console.log(`I'm attacking with ${this.weapon}`);

            },
        };

        const wizard = {
            __proto__: character,
            name: "Merlin",
            health:110,
            level: 11,
            weapon: "Firestorm",
            attack() {
                console.log(`I'm using ${this.spell}`);
              },
            };

            character.introduce();
            warrior.attack();
            wizard.introduce();
            wizard.castSpell();