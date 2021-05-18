// core
// tslint:disable:variable-name
import {Component} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';

import {BsModalRef} from 'ngx-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal',
  templateUrl: './modal-download.component.html'
})

export class ModalDownloadComponent {

  public uri: SafeUrl; // create or edit

  constructor(private bsModalRef: BsModalRef) {
  }
}
