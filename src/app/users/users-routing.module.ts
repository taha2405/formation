import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'add', component: UsersAddComponent },
  { path: 'update', component: UsersUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
