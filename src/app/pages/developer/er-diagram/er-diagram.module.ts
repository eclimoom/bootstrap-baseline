import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalDataComponent} from './modal-data/modal-data.component';
import {ModalDownloadComponent} from './modal-download/modal-download.component';
import {ModalModelComponent} from './modal-model/modal-model.component';
import {ModalRelationComponent} from './modal-relation/modal-relation.component';
import {ModalSchemaComponent} from './modal-schema/modal-schema.component';
import {ModalUploadComponent} from './modal-upload/modal-upload.component';
import {ModelComponent} from './model/model.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SchemaComponent} from './schema/schema.component';
import {ErDiagramComponent} from './er-diagram.component';
import {DataService} from './service/data.service';
import {JsPlumbService} from './service/js-plumb.service';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule, CollapseModule, ModalModule} from 'ngx-bootstrap';
import {ErDiagramRoutingModule} from './er-diagram-routing.module';
import {UIModule} from '../../../shared/ui/ui.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
    json: () => import('highlight.js/lib/languages/json')
  };
}

@NgModule({
  declarations: [
    ModalDataComponent,
    ModalDownloadComponent,
    ModalModelComponent,
    ModalRelationComponent,
    ModalSchemaComponent,
    ModalUploadComponent,
    ModelComponent,
    NavbarComponent,
    SchemaComponent,
    ErDiagramComponent,
  ],
  imports: [
    CommonModule,
    ErDiagramRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    UIModule,
    NgbModule,
    HighlightModule,
  ],
  providers: [
    DataService,
    JsPlumbService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  entryComponents: [
    ModalDataComponent,
    ModalModelComponent,
    ModalSchemaComponent,
    ModalRelationComponent,
    ModalDownloadComponent,
    ModalUploadComponent,
  ]
})
export class ErDiagramModule {
}
