import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PouchdbComponent } from './pouchdb.component';
import { PouchdbListComponent } from './pouchdb-list/pouchdb-list.component';


const routes: Routes = [
  {
    path: '',
    component: PouchdbComponent,
    children: [
      {
        path: '',
        component: PouchdbListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuchdbRoutingModule { }
