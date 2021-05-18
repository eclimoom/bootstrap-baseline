import {Component, OnInit} from '@angular/core';
import {PouchdbService} from '../../core/services/pouchdb.service';
import {ITest} from './models/test';
import uuid from 'relational-pouch/lib/uuid';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  tests: ITest[] = [];
  test: ITest = {};

  constructor(
    public pouchDB: PouchdbService,
  ) {
  }

  ngOnInit() {
    this.breadCrumbItems = [
      {label: 'Shreyu', path: '/'},
      {label: 'Test', path: '/test', active: true},
    ];

    this.getTest();
    this.pouchDB.collection.subscribe((data) => {
      console.log(data);
    });
  }

  getTest() {
    this.pouchDB.fetch()
      .then((res) => {
        this.tests = res;
      });
  }

  setTest(item) {
    this.test = item;
    console.log(item, this.test);
  }

  saveTest(item = this.test) {
    item.type = 'test';
    if (!item.id) {
      item.id = uuid();
      item.created_at = new Date();
      item.updated_at = new Date();
    }
    if (item.id) {
      item.updated_at = new Date();
    }
    this.pouchDB.put(item.id, item)
      .catch((err: any) => {
        if (err === '409') {
          console.error('Conflict');
        } else {
          throw err;
        }
      })
      .then((ok: any) => {
        this.test = {};
        this.getTest();
      });
  }

}
