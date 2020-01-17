import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  todoList: any[];
  title = 'todo app';

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.todoList = this.listService.getTodoList();
  }

  addItem(todoitem: string) {
    this.listService.addItem({ todoitem });

  }
  removeItem(todoitem: string) {
    const temp = this.todoList.indexOf(todoitem);
    this.todoList.splice(temp, 1);
  }
}
