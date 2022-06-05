import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: [ './pet-search.component.css' ]
})

export class PetSearchComponent implements OnInit {
  pets$!: Observable<Pet[]>;
  //Свойства searchTerms определяется как RxJS Subject.
  private searchTerms = new Subject<string>();

  constructor(private petService: PetService) {}

  // Вставить поисковый запрос в наблюдаемый поток.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pets$ = this.searchTerms.pipe(
      // подождать 300 мс после каждого нажатия клавиши, прежде чем рассматривать срок
      debounceTime(300),

      // игнорировать новый термин, если он совпадает с предыдущим термином
      distinctUntilChanged(),

      // переключаться на новый поиск, наблюдаемый каждый раз, когда термин изменяется
      switchMap((term: string) => this.petService.searchPets(term)),
    );
  }
  
}