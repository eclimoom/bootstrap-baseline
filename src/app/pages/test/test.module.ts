import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test.component';
import {UIModule} from '../../shared/ui/ui.module';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {NgxMaskModule} from 'ngx-mask';
import {FlatpickrModule} from 'angularx-flatpickr';
import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {NgSelectModule} from '@ng-select/ng-select';
import {ColorPickerModule} from 'ngx-color-picker';
import {ArchwizardModule} from 'angular-archwizard';
import {WidgetModule} from '../../shared/widgets/widget.module';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
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
    WidgetModule,
  ]
})
export class TestModule { }
