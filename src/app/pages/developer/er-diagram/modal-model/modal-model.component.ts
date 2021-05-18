// core
// tslint:disable:variable-name
import {Component} from '@angular/core';

// ngx-bootstrap
import {BsModalRef} from 'ngx-bootstrap';

// service
import {DataService} from '../service/data.service';

// class
import {Model} from '../class/model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal',
  templateUrl: './modal-model.component.html'
})

export class ModalModelComponent {

  public mode: string; // create or edit
  public model: Model;

  constructor(
    private bsModalRef: BsModalRef,
    private dataService: DataService,
  ) {
  }

  use_laravel_auth: boolean;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    console.log('ModalSchemaComponent.ngOnDestroy() is called!');

    // convert string to number
    this.model.schema_id_for_relation = Number(this.model.schema_id_for_relation);
    this.dataService.flg_repaint = true;
  }

  private create() {
    console.log('ModalTableComponent.create() is called!');
    this.dataService.addModel(this.model);
    this.bsModalRef.hide();
  }
}
