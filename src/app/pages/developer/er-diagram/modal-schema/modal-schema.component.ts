// tslint:disable:variable-name
import {Component} from '@angular/core';

import {BsModalRef} from 'ngx-bootstrap';

// service
import {DataService} from '../service/data.service';

// class
import {Schema} from '../class/schema';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal',
  templateUrl: './modal-schema.component.html',
  styleUrls: ['./modal-schema.component.scss']
})

export class ModalSchemaComponent {

  public mode: string; // create or edit
  public schema: Schema;

  constructor(private bsModalRef: BsModalRef, private dataService: DataService) {
  }

  use_laravel_auth: boolean;
  parent_model: any;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    console.log('ModalSchemaComponent.ngOnDestroy() is called!');
    this.dataService.flg_repaint = true;
  }

  private create() {
    console.log('ModalSchemaComponent.create() is called!');
    this.dataService.addSchema(this.schema);
    this.bsModalRef.hide();
  }
}
