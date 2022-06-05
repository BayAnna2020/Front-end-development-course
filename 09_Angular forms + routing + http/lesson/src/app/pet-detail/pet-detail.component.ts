import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../pet';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PetService }  from '../pet.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  @Input() pet!: Pet;

  @Output() addEvent = new EventEmitter();

  feedTheCat() {
    this.addEvent.emit();
  }

// ActivatedRoute - содержит инорфмацию о маршруте к этому экземпляру PetDetailComponent. 
// Этому компоненту интересен список параметров маршрута, выделенных из URL. Параметр "id" - id отображаемого животного.
// PetService - получает информацию о герое с удаленного сервера, и PetDetailComponent будет использовать его для получения животного для отображения.
// location - это сервис фреймворка Angular для взаимодействия с браузером. Мы обратимся к ней позднее для возврата к тому виду, из которому мы пришли.
  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) { 
  }

  ngOnInit(): void {
    this.getPet();
  }

//   route.snapshot - статическое отображение информации о маршруте после того, как компонент был создан.
// paramMap - словарь значений параметров маршрута, выделенных из URL. Ключ "id" возвращает id нужного животного.
// Параметры маршрута - всегда строки. Оператор JavaScript (+) преобразует строку в число, чем и является id.
getPet(): void {
  const id = parseInt(this.route.snapshot.paramMap.get('id') || ""); 
  this.petService.getPet(id)
    .subscribe(pet => this.pet = pet);
}

//вернуться назад
  goBack(): void {
    this.location.back();
  }

  //сохранить изменения
  save(): void {
    this.petService.updatePet(this.pet)
      .subscribe(() => this.goBack());
  }
}
