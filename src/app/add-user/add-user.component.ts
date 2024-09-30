import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  name: string = '';
  email: string = '';

  @Output() userAdded = new EventEmitter<{ name: string; email: string }>();

  addUser() {
    if (this.name && this.email) {
      this.userAdded.emit({ name: this.name, email: this.email });
      this.name = '';
      this.email = '';
    }
  }
}
