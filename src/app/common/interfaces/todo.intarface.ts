import {TodoStatus} from "../types/todo-status"
import {IPerson} from "./persons.interface";

export  interface ITodo{
   id: string
   firstname: string
   Lastname: string
   email:string
   street:string
   phone: string
   description: string
   status: TodoStatus
   createdAt: Date
   updatedAt?: Date
   removedAt?:Date
   responsiblePerson: IPerson
   responsiblePersonId?: string
 }

