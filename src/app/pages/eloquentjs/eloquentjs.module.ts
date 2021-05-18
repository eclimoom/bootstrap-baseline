import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EloquentjsRoutingModule } from './eloquentjs-routing.module';
import { EloquentjsComponent } from './eloquentjs.component';
import { EloquentjsUsersListComponent } from './eloquentjs-users-list/eloquentjs-users-list.component';


@NgModule({
  declarations: [EloquentjsComponent, EloquentjsUsersListComponent],
  imports: [
    CommonModule,
    EloquentjsRoutingModule
  ]
})
export class EloquentjsModule { }
