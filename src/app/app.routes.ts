import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
   { path: 'users', component: UserListComponent },
   { path: 'todos/:id', component: TodosComponent },
   { path: '', redirectTo: '/users', pathMatch: 'full' },
   { path: 'albums', component: AlbumsComponent },
   
];
export const routing = RouterModule.forRoot(routes);

