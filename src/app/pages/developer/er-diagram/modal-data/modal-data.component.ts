// core
// tslint:disable:variable-name
import {Component} from '@angular/core';

// ngx-bootstrap
import {BsModalRef} from 'ngx-bootstrap';

// service
import {DataService} from '../service/data.service';

// class
import {Data} from '../class/data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal',
  templateUrl: './modal-data.component.html'
})

export class ModalDataComponent {

  public data: Data;

  constructor(private bsModalRef: BsModalRef, private dataService: DataService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    console.log('ModalDataComponent.ngOnDestroy() is called!');

    // use laravel auth check
    if (this.data.use_laravel_auth) {

      // get user model
      const model_user = this.dataService.data.getModelByName('user');

      if (model_user === null) {

        // confirm
        if (confirm('user model for laravel auth will be created. OK?')) {
          this.dataService.addLaravelUserModel();
        } else {
          this.dataService.data.use_laravel_auth = false;
          alert('use_laravle_auth is changed to false');
        }

      } else {
        const model_user_schema_name = model_user.getSchemaByName('name');
        const model_user_schema_email = model_user.getSchemaByName('email');
        const model_user_schema_password = model_user.getSchemaByName('password');

        if (model_user_schema_name === null || model_user_schema_email === null || model_user_schema_password === null) {

          // confirm
          if (confirm('\'name\',\'email\',\'password\' schema will be added to user model. OK?')) {
            this.dataService.editSchemaToLaravelUserModel();
          } else {
            this.dataService.data.use_laravel_auth = false;
            alert('use_laravle_auth is changed to false');
          }
        }
      }
    }
  }
}
