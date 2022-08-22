import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersAddComponent } from './components/users-add/users-add.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    UsersAddComponent,
    UsersUpdateComponent,
   
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports: [
    
  ]
})
export class UsersModule { }
