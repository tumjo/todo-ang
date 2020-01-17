import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { TodosComponent } from './todos/todos.component';
import { FrontComponent } from './front/front.component';
import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    TodosComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
