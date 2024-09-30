import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; // Import Location

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

  constructor(private route: ActivatedRoute, private location: Location) {} // Inject Location

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; 
      console.log('User ID:', this.userId); 
      this.fetchTodos(); 
    });
  }

  fetchTodos() {
    console.log('Fetching todos for userId:', this.userId); 
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${this.userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.todos = data;
        console.log(this.todos); 
      })
      .catch(error => console.error('Error fetching todos:', error));
  }

  goBack() {
    this.location.back(); 
  }
}
