import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from "../../common/services/todo.service";
import {ITodo} from "../../common/interfaces/todo.intarface";
import {UserRole} from "../../interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  todos: ITodo[]=[]

  constructor(
    private todoService:TodoService,
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }
getTodos(){
    this.todoService.getTodos().subscribe((res )=>{
this.todos=res;
    });
}
delete(id:string){
    this.todoService.deleteTodoById(id)
      .subscribe(()=>{
    this.getTodos()
  })

}
  complete(id:string) {
    this.todoService.complateTodoById(id)
      .subscribe(() => {
        this.getTodos()
      })
  }
  addUser(fullName: string, role: string){
    console.log(fullName, role as UserRole);
  }
}
