import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EloquentjsComponent } from './eloquentjs.component';
import { EloquentjsUsersListComponent } from './eloquentjs-users-list/eloquentjs-users-list.component';


const routes: Routes = [
  {
    path: '',
    component: EloquentjsComponent,
    children: [
      {
        path: '',
        component: EloquentjsUsersListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EloquentjsRoutingModule { }
