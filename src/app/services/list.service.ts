import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private todoList: any[] = [   // hardcoded list - temp use
    {todoitem: 'example1'},
    {todoitem: 'example2'},
    {todoitem: 'example3'},
    {todoitem: 'example4'},
  ];
  constructor() { }

  getTodoList() {
    return this.todoList;
  }

  addItem(todo) {
    this.todoList.push(todo);
  }
  removeItem(todo) {
    const temp = this.todoList.indexOf(todo);
    this.todoList.splice(temp, 1);
  }
}
