import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  tekst: string;
  todolist = [   // hardcoded list - temp use
    {todoitem: 'example1'},
    {todoitem: 'example2'},
    {todoitem: 'example3'},
  ];
  @Output() submittodo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.tekst = 'Add todo';
  }
  newtodo(uusi: string) {
    this.submittodo.emit(uusi);
  }
  /*
  newtodo(uusi: string) {
    this.tekst = uusi;
  }
*/
}
