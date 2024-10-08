import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms'; 
import { AddUserComponent } from './add-user/add-user.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes'; 
import { TodosComponent } from './todos/todos.component'; 
import { MatListModule } from '@angular/material/list';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component'; // Додайте імпорт PhotosComponent

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    TodosComponent,
    AlbumsComponent,
    PhotosComponent, // Додайте PhotosComponent до декларацій
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    routing
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
