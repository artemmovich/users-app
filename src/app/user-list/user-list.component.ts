import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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
  displayedColumns: string[] = ['name', 'email'];
  dataSource: MatTableDataSource<User>;

  constructor() {
    this.dataSource = new MatTableDataSource<User>(this.users);
  }

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
      this.addUser(userForm.value);
      userForm.reset(); // Очищення форми після додавання користувача
    }
  }

  addUser(user: { name: string; email: string }) {
    const newUser: User = {
      id: this.users.length + 1,
      name: user.name,
      email: user.email
    };

    console.log('Adding user:', newUser); // Перевірка в консолі
    this.users.push(newUser);
    this.dataSource.data = [...this.users]; // Примусове оновлення dataSource
  }
}
