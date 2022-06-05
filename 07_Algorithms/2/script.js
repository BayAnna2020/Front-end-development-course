class Node { // для хранения ссылок на значение, след и предыдущий элементы
  constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
  }
}


class DoublyLinkedList {
  constructor(value) {
      this.head = {
          value: value,
          next: null,
          previous: null
      };
      this.length = 1;
      this.tail = this.head;
  }

  //Вывод списка в консоль
  printList() {
    let array = [];
    let currentList = this.head;  //- текущий список
    while (currentList !== null) {
        array.push(currentList.value);
        currentList = currentList.next;
    }

    console.log(array.join(' - '));   //объединение элементов массива в строку
    return this;
}

  // Вставить узел в конец списка
  append(value) {
      let newNode = new Node(value);  

      this.tail.next = newNode;   //обновление ссылки на следующий элемент
      newNode.previous = this.tail;
      this.tail = newNode;   //хвостом списка становится новый узел

      this.length++;
      this.printList();
  }

  // Вставить узел в начало списка
  prepend(value) {
      let newNode = new Node(value);

      newNode.next = this.head;    //новому узлу присваивается ссылка на следующий элемент (начало списка)
      this.head.previous = newNode;   //обновить ссылку на предыдущий элемент
      this.head = newNode;   //головой списка становится новый узел

      this.length++;   //обновление длины списка
      this.printList();
  }

  //Вставить узел по заданному индексу
  insert (index, value) {
      if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {  //Number.isInteger() определяет, является ли переданное значение целым числом.
          console.log(`Invalid index. Current length is ${this.length}.`);
          return this;
      }

      // Если индекс равен 0, добавить в начало
      if (index === 0) {
          this.prepend(value);
          return this;
      }

      // Если index равен this.length, добавить в конец 
      if (index === this.length) {
          this.append(value);
          return this;
      }

      // Найти узел по индексу
      let newNode = new Node(value);
      let previousNode = this.head;

      for (let k = 0; k < index - 1; k++) {
          previousNode = previousNode.next;
      }

      let nextNode = previousNode.next;
      
      newNode.next = nextNode;
      previousNode.next = newNode;
      newNode.previous = previousNode;
      nextNode.previous = newNode;

      this.length++;
      this.printList();
  }


  //Изменить узел по заданному индексу
  change (index, value) {
    if (!Number.isInteger(index) || index < 0 || index > this.length + 1) {  //Number.isInteger() определяет, является ли переданное значение целым числом.
        console.log(`Invalid index. Current length is ${this.length}.`);
        return this;
    }


    // Найти узел по индексу
    let newNode = new Node(value);
    let previousNode = this.head;

    for (let k = 0; k < index - 1; k++) {
        previousNode = previousNode.next;
    }

    let nextNode = previousNode.next;
    
    newNode = nextNode;
    previousNode.next = newNode;
    newNode.previous = previousNode;
    nextNode.previous = previousNode;

    this.printList();
}

  // Удалить узел
  remove (index) {
      if (!Number.isInteger(index) || index < 0 || index > this.length) {
          console.log(`Invalid index. Current length is ${this.length}.`);
          return this;
      }

      // Удалить верхний элемент
      if (index === 0) {
          this.head = this.head.next;  //обновление ссылки (следующий узел становится головой)
          this.head.previous = null;   //обновление ссылки на следующий элемент (удаление предыдущего узла перед головой)

          this.length--;
          this.printList();
          return this;
      }

      // Удалить нижний элемент
      if (index === this.length - 1) {
          this.tail = this.tail.previous; //обновление ссылки (предыдущий узел становится хвостом)
          this.tail.next = null;          //обновление ссылки на следующий элемент (удаление следующего узла после хвоста)

          this.length--;
          this.printList();
          return this;
      }

      // Удалить узел по индексу
      let previousNode = this.head;

      for (let k = 0; k < index - 1; k++) {
          previousNode = previousNode.next;
      }
      let deleteNode = previousNode.next;
      let nextNode = deleteNode.next;

      previousNode.next = nextNode;
      nextNode.previous = previousNode;

      this.length--;
      this.printList();
      return this;
  }

  //поиск элемента в списке 
  search(value) {
      let currentNode = this.head;  //запоминаем текущее значение списка (поиск начинается с головы)
      while(currentNode) {   //пока у текущего элемента есть ссылка на предыдущий элемент
          if(currentNode.value === value) return currentNode.value;    //обращение к ссылке на следующий элемент и поиск значения
          currentNode = currentNode.next;  //иначе продолжаем обращаться к ссылке по следующему значению
      }  
      return console.log("There is no such element");
  }
}

let myDoublyList = new DoublyLinkedList(10);

//Вставить узел в конец списка
myDoublyList.append(5);                     // 10 - 5
myDoublyList.append(16);                    // 10 - 5 - 16

myDoublyList.change(1, 3);                  //3 - 5 - 16  ?

//Вставить узел в начало списка
myDoublyList.prepend(1);                    // 1 - 3- 5 - 16

// //Вставить узел по заданному индексу
// myDoublyList.insert(2, 99);                 // 1 - 3- 99 - 5 - 16
// myDoublyList.insert(20, 88);                // Invalid index. Current length is 5.
// myDoublyList.insert(5, 80);                 // 1 - 3- 99 - 5 - 16 - 80
// myDoublyList.insert(0, 80);                 // 80 - 1 - 3- 99 - 5 - 16 - 80

// //Удалить узел
// myDoublyList.remove(0);                     // 1 - 3- 99 - 5 - 16 - 80
// myDoublyList.remove(5);                     // 1 - 3- 99 - 5 - 16
// myDoublyList.remove(2);                     // 1 - 3- 5 - 16
// myDoublyList.remove(6);                     // Invalid index. Current length is 4.

// //найти значение в списке
// console.log(myDoublyList.search(1) + " - found number");   //1 - found number