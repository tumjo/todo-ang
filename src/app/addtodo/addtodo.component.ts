import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  tekst: string;
  @Output() submitTodo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.tekst = 'Add todo';
  }
  newtodo(uusi: string) {
    this.submitTodo.emit(uusi);
  }
}
