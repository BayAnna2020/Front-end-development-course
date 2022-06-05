import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent }      from './pets/pets.component';
import { PetDetailComponent }  from './pet-detail/pet-detail.component';

//добавление параметризированных маршрутов
const routes: Routes = [
  { path: 'pets', component: PetsComponent },
  //Двоеточие(:) в path указывает на то, что :id является параметром для конкретного id животного.
  { path: 'detail/:id', component: PetDetailComponent }
];

@NgModule({
  //Метод forRoot() предоставляет провайдеров сервисов и директивы для маршрутизации,
  //а также выполяет первоначальную навигацию на основе текущего URL браузера
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}