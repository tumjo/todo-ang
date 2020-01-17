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

  addItem(item) {
    this.todoList.push( item );
    console.log(item);
  }

}
