import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosCache: { [key: number]: Todo[] } = {};

  getTodos(userId: number) {
    return this.todosCache[userId] || [];
  }

  setTodos(userId: number, todos: Todo[]) {
    this.todosCache[userId] = todos;
  }
}
