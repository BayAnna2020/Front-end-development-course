import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pet } from './pet';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pets = [
      {id: 1, name: 'Мурка', gender: 'Кошка', species: 'Британская', character: 'Спокойный', weight: 4.5, color: 'Рыжий'},
      {id: 2, name: 'Степа', gender: 'Кот', species: 'Сиамский кот', character: 'Игривый', weight: 5, color: 'Рыжий'},
      {id: 3, name: 'Вася', gender: 'Кот', species: 'Шотландский кот', character: 'Ласковый', weight: 4, color: 'Рыжий'},
      {id: 4, name: 'Винни', gender: 'Кот', species: 'Британский', character: 'Активный', weight: 3.5, color: 'Рыжий'},
      {id: 5, name: 'Тима', gender: 'Кот', species: 'Нет породы', character: 'Спокойный', weight: 2.5, color: 'Рыжий'},
      {id: 6, name: 'Арчи', gender: 'Кот', species: 'Бенгальский кот', character: 'Бешеный', weight: 4.3, color: 'Рыжий'},
      {id: 7, name: 'Ника', gender: 'Кошка', species: 'Нет породы', character: 'Спокойный', weight: 5.5, color: 'Рыжий'},
      {id: 8, name: 'Беня', gender: 'Кот', species: 'Сиамский кот', character: 'Активный', weight: 3.6, color: 'Рыжий'},
      {id: 9, name: 'Боня', gender: 'Кошка', species: 'Британская', character: 'Ласковый', weight: 4.5, color: 'Рыжий'},
      {id: 10, name: 'Соня', gender: 'Кошка', species: 'Британская', character: 'Спокойный', weight: 2.7, color: 'Серый'}
    ];
    return {pets};
  }

  // Переопределяет метод genId, чтобы гарантировать, что у героя всегда есть идентификатор.
  // Если массив животных пуст,
  // метод ниже возвращает начальное число (1).
  // если массив животных не пуст, метод ниже возвращает наивысший
  // id героя + 1.
  genId(pets: Pet[]): number {
    return pets.length > 0 ? Math.max(...pets.map(pet => pet.id)) + 1 : 1;
  }
}