import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component'; 

const routes: Routes = [
   { path: 'users', component: UserListComponent },
   { path: 'todos/:id', component: TodosComponent },
   { path: '', redirectTo: '/users', pathMatch: 'full' },
   { path: 'albums', component: AlbumsComponent },
   { path: 'photos/:id', component: PhotosComponent }, 
];

export const routing = RouterModule.forRoot(routes);
