import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaravelCrudRoutingModule } from './laravel-crud-routing.module';
import { LaravelCrudComponent } from './laravel-crud.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UIModule} from '../../shared/ui/ui.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {NgxMaskModule} from 'ngx-mask';
import {FlatpickrModule} from 'angularx-flatpickr';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {NgSelectModule} from '@ng-select/ng-select';
import {ColorPickerModule} from 'ngx-color-picker';
import {ArchwizardModule} from 'angular-archwizard';


@NgModule({
  declarations: [LaravelCrudComponent],
  imports: [
    CommonModule,
    LaravelCrudRoutingModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgxMaskModule.forRoot(),
    FlatpickrModule.forRoot(),
    DropzoneModule,
    NgSelectModule,
    ColorPickerModule,
    ArchwizardModule,
  ]
})
export class LaravelCrudModule { }
