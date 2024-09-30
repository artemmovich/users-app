import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  userId!: number;
  newTodoTitle: string = '';
  editTodoId: number | null = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.fetchTodos();
    });
  }

  fetchTodos() {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${this.userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.todos = data;
      })
      .catch(error => console.error('Error fetching todos:', error));
  }

  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        userId: this.userId,
        id: this.todos.length + 1, // Consider implementing a better unique ID generator
        title: this.newTodoTitle,
        completed: false
      };
      this.todos.unshift(newTodo);
      this.newTodoTitle = '';
    }
  }

  startEditing(todo: Todo) {
    this.editTodoId = todo.id;
    this.newTodoTitle = todo.title;
  }

  saveEdit() {
    if (this.editTodoId !== null) {
      const todoToEdit = this.todos.find(todo => todo.id === this.editTodoId);
      if (todoToEdit) {
        todoToEdit.title = this.newTodoTitle;
        this.newTodoTitle = '';
        this.editTodoId = null;
      }
    }
  }

  goBack() {
    this.location.back();
  }
}
