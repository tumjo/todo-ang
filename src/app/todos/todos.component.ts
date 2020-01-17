import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() item;
  @Output() removeTodo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  removeItem() {
    this.removeTodo.emit(this.item);
  }
}
