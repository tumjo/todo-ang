import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  tekst: string;

  constructor() { }

  ngOnInit() {
    this.tekst = 'Add todo';
  }

}
