import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'actions'];
  dataSource = new MatTableDataSource<User>(this.users);
  selectedUser: User | null = null; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.users = data.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email
        }));
        this.dataSource.data = this.users;
      });
  }

  onSubmit(userForm: any) {
    if (userForm.valid) {
      if (this.selectedUser) {
        this.updateUser(userForm.value);
      } else {
        this.addUser(userForm.value);
      }
      userForm.reset();
      this.selectedUser = null; 
    }
  }

  addUser(user: { name: string; email: string }) {
    const newUser: User = {
      id: this.users.length + 1,
      name: user.name,
      email: user.email
    };
    this.users.push(newUser);
    this.dataSource.data = this.users;
  }

  editUser(user: User) {
    this.selectedUser = { ...user }; 
  }

  updateUser(updatedUser: { name: string; email: string }) {
    if (this.selectedUser) {
      const userIndex = this.users.findIndex(user => user.id === this.selectedUser!.id);
      if (userIndex > -1) {
        this.users[userIndex] = {
          ...this.selectedUser,
          name: updatedUser.name,
          email: updatedUser.email
        };
        this.dataSource.data = this.users;
      }
    }
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u.id !== user.id);
    this.dataSource.data = this.users;
  }

  
  showTodos(userId: number) {
   
    this.router.navigate(['/todos', userId]); 
  }
}
