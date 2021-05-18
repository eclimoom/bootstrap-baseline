import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperRoutingModule } from './developer-routing.module';
import { DeveloperComponent } from './developer.component';
import {FormsModule} from '@angular/forms';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {FlatpickrModule} from 'angularx-flatpickr';
import {UIModule} from '../../shared/ui/ui.module';
import {WidgetModule} from '../../shared/widgets/widget.module';


@NgModule({
  declarations: [DeveloperComponent],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    FormsModule,
    NgbDropdownModule,
    NgApexchartsModule,
    FlatpickrModule.forRoot(),
    UIModule,
    WidgetModule,
  ]
})
export class DeveloperModule { }
