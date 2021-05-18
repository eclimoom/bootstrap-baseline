import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LaravelCrudComponent} from './laravel-crud.component';


const routes: Routes = [
  {
    path: '',
    component: LaravelCrudComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaravelCrudRoutingModule { }
