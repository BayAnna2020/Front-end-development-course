
// Индивидуальный сотрудник. Содержит свойства и поведение для одного сотрудника
class Player {
    constructor(name) {
        this.name = name;
        this.last = null;  //указатель на элемент
    }
  }
  
  // Класс, содержащий группу сотрудников, а также свойства и функции группы.
  class Players {
    constructor(){
      this.players = [];
    }

    // добавить нового сотрудника и сохранить его в коллекции
    newPlayer(name){
      let p = new Player(name);
      this.players.push(p);

      const prev = this.last;
      const element = { prev, name };
      this.last = element;

      return p;
    }
    get allPlayers(){
      return this.players;
    }

    //увольнение (удаление) сотрудника
    pop() {
        const element = this.last;
        if (!element) {
            console.log("Employees run out");
            return null;
        } else {
            this.last = element.prev;   
            return element.name;
        }
    }

    //вернуть верхний элемент без изменения стека
    peek() {
        return this.players[this.players.length - 1];
    }
        
    // Длина массива
    get numberOfPlayers(){
        return this.players.length;
    }
  }
  
let league = new Players();

//Добавление новых элементов
league.newPlayer("Mark");
league.newPlayer("Roger");
league.newPlayer("Robert");

//Количество элементов в стеке
console.log( "Number of elements on the stack - " + league.numberOfPlayers);
console.log(league.allPlayers);

//Вернуть верхний элемент стека без удаления
console.log(league.peek());

//Удалить элемент с вершины стека и вернуть его
console.log(league.pop());
console.log(league.pop());
console.log(league.pop());
console.log(league.pop());
