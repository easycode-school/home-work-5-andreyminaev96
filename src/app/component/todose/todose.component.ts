import { Component } from '@angular/core';

@Component({
  selector: 'app-todose',
  templateUrl: './todose.component.html',
  styleUrls: ['./todose.component.css']
})
export class TodoseComponent {
  newTodos;
  constructor() { }

 // Принимает значения масива компонента todo-form  записывает в новую переменую и передает компоненту todo-list;
  todoseChang(event) {
    this.newTodos = event;
  }

}
