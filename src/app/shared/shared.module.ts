import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [CustomPipePipe, FilterPipe],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    CustomPipePipe,
    FilterPipe
  ]
})
export class SharedModule { }
