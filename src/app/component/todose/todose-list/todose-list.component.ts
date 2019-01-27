import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-todose-list',
  templateUrl: './todose-list.component.html',
  styleUrls: ['./todose-list.component.css']
})
export class TodoseListComponent implements  OnChanges {
  @Input() todos;
  activeList = false;

  constructor() { }

  // проверка получаемого массива todos
  ngOnChanges() {
    if (this.todos !== undefined || false) {
      this.activeList = true;
    }
  }
}
