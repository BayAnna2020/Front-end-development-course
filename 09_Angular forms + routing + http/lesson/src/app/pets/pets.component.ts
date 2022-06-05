import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets!: Pet[];

  //использование директивы output
  feedTheCat() {
    alert("Котик покормлен");
  }

  //получение животных из сервиса
  getPets(): void {
    this.petService.getPets()
        .subscribe(pets => this.pets = pets);
  }

  constructor(
    private petService: PetService,
    ) { }

  //вызов getPets() внутри ловушки жизненного цикла ngOnInit вместо конструктора
  ngOnInit(): void {
    this.getPets();
  }

  //добавить новое животное
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.petService.addPet({ name } as Pet)
      .subscribe(pet => {
        this.pets.push(pet);
      });
  }

  //удалить животное
  delete(pet: Pet): void {
    this.pets = this.pets.filter(p => p !== pet);
    this.petService.deletePet(pet).subscribe();
  }

}
