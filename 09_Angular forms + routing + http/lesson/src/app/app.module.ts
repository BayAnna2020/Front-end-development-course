import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetsComponent } from './pets/pets.component';
import { PetSearchComponent } from './pet-search/pet-search.component';


@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetDetailComponent,
    PetSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // Модуль HttpClientInMemoryWebApiModule перехватывает HTTP-запросы
    // и возвращает смоделированные ответы сервера.
    // Удаляем, когда реальный сервер готов принимать запросы.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    //Метод настройки forRoot() задействует класс InMemoryDataService, 
    //который подготовит базу данных в оперативной памяти.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
