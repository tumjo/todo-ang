import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  title = 'todo app';
  todoList: any[] = [   // hardcoded list - temp use
    {todoitem: 'example1'},
    {todoitem: 'example2'},
    {todoitem: 'example3'},
    {todoitem: 'example4'},
  ];
  constructor() { }

  ngOnInit() { }

  addItem(todoitem: string) {
    this.todoList.push({ todoitem });
  }
}
