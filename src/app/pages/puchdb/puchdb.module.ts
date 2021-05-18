import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuchdbRoutingModule } from './puchdb-routing.module';

import { PouchdbComponent } from './pouchdb.component';
import { PouchdbListComponent } from './pouchdb-list/pouchdb-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PouchdbComponent,
    PouchdbListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PuchdbRoutingModule
  ]
})
export class PuchdbModule { }
