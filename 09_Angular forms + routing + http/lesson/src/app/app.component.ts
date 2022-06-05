import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//скрыть-показать котиков
conditionCat: boolean = true;

toggle(){
  this.conditionCat=!this.conditionCat;
}

  title = 'Поиск домашних животных'; 
}
