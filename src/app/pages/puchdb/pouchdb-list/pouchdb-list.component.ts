import { Component, OnInit, NgZone } from '@angular/core';
import { PouchdbService } from 'src/app/core/services/pouchdb.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-pouchdb-list',
  templateUrl: './pouchdb-list.component.html',
  styleUrls: ['./pouchdb-list.component.scss']
})
export class PouchdbListComponent implements OnInit {

  public people: Array<any>;
  public form: any;

  constructor(
    private database: PouchdbService,
    private zone: NgZone,
  ) {
    this.people = [];
    this.form = {
      username: '',
      firstname: '',
      lastname: '',
      type: 'people'
    };
  }

  ngOnInit() {
    this.database.getChangeListener().subscribe(data => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < data.change.docs.length; i++) {
        this.zone.run(() => {
          this.people.push(data.change.docs[i]);
        });
      }
    });
    this.database.fetch().then(result => {
      this.people = [];
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < result.rows.length; i++) {
        this.people.push(result.rows[i].doc);
      }
    }, error => {
      console.error(error);
    });
  }

  public insert() {
    if (this.form.username && this.form.firstname && this.form.lastname) {
      this.database.put(uuidv4(), this.form);
      this.form = {
        username: '',
        firstname: '',
        lastname: ''
      };
    }
  }

}
