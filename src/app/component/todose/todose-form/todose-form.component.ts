import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-todose-form',
  templateUrl: './todose-form.component.html',
  styleUrls: ['./todose-form.component.css']
})
export class TodoseFormComponent {
  @Output() newTodosChange = new EventEmitter();
  public todos = [];
  public newTodos;
  constructor() { }

// метод принимает значения формы и записыввает их в масив todo и передает значения масива родительскому компоненту  после чего делает сброс полей формы
  onSubmitHandler(form: NgForm) {
    this.newTodos = form.value;
    this.todos.push(this.newTodos);
    this.newTodosChange.emit(this.todos);
    form.resetForm();
  }

}
