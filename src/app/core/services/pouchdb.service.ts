import {Injectable, EventEmitter} from '@angular/core';

import PouchDB from 'pouchdb';
import find from 'pouchdb-find';
import rel from 'relational-pouch';
import search from 'pouchdb-quick-search';

import {BehaviorSubject, Observable} from 'rxjs';


PouchDB
  .plugin(find)
  .plugin(rel);

@Injectable({
  providedIn: 'root'
})
export class PouchdbService {

  public collection = new BehaviorSubject<any[]>([]);
  public item = new BehaviorSubject<any>(null);

  private isInstantiated: boolean;
  public database: any;
  private listener: EventEmitter<any> = new EventEmitter();
  private relDB: any;

  constructor() {
    if (!this.isInstantiated) {
      this.database = new PouchDB('nraboy');
      this.isInstantiated = true;
    }

    /*this.database.setSchema([
      {
        singular: 'test',
        plural: 'tests',
      },
      {
        singular: 'post',
        plural: 'posts',
        relations: {
          author: {belongsTo: 'author'},
          comments: {hasMany: 'comment'}
        }
      },
      {
        singular: 'author',
        plural: 'authors',
        relations: {
          posts: {hasMany: 'post'}
        }
      },
      {
        singular: 'comment',
        plural: 'comments',
        relations: {
          post: {belongsTo: 'post'}
        }
      }
    ]);*/

    this.sync('http://35.245.144.165:5984/nraboy');
  }

  public findAll(
    type: string,
    lmt: number = 10,
    skp: number = 0,
    ord: string = 'created_at',
    ordD: string = 'DESC'
  ): any {

    // this.buildIndexes(['_id', 'data.title', 'data.type']);

    this.database.createIndex({
      index: {fields: ['name', 'consecutive', 'created_at', 'type']}
    })
      .then(() => {
        return this.database.find({
          selector: {
            type: {$eq: type}
          },
          sort: [
            {
              user: 'desc'
            }
          ],
          limit: lmt,
          skip: skp,
        });
      });
  }

  public save(documentType: string, data: any) {
    return this.database.rel.save(documentType, data);
  }

  public find(documentType: string, options: any = null) {

  }

  public all(documentType: string): any {
    return this.database.allDocs();
  }

  public paginate(documentType: string, start: number = 1, limitItems: number = 10, inverse: boolean = true) {
    return this.database.rel.find(documentType, {
      startKey: start,
      limit: limitItems,
      descending: inverse,
    });
  }

  public delete(documentType: string, object: any) {
    return this.database.rel.del(documentType, object);
  }

  public putAttachment(
    documentType: string,
    object: any,
    attachmentId: any,
    attachment: any,
    attachmentType: any
  ) {
    return this.database.rel.putAttachment(
      documentType,
      object,
      attachmentId,
      attachment,
      attachmentType
    );
  }

  public getAttachment(documentType: string, id: any, attachmentId: any) {
    return this.database.rel.getAttachment(documentType, id, attachmentId);
  }

  public removeAttachment(documentType: string, object: any, attachmentId: any) {
    return this.database.rel.removeAttachment(documentType, object, attachmentId);
  }

  public parseDocID(docID: any) {
    return this.database.rel.parseDocID(docID);
  }

  public makeDocID(parsedID) {
    return this.database.rel.makeDocID(parsedID);
  }

  public findHasMany(type, belongsToKey, belongsToId) {
    return this.database.rel.findHasMany(type, belongsToKey, belongsToId);
  }

  public fetch() {
    return this.database.allDocs({include_docs: true});
  }

  public get(id: string) {
    return this.database.get(id);
  }

  public put(id: string, document: any) {
    document._id = id;
    return this.get(id).then(
      (result: any) => {
        document._rev = result._rev;
        return this.database.put(document);
      },
      (error: any) => {
        // tslint:disable-next-line: triple-equals
        if (error.status == '404') {
          return this.database.put(document);
        } else {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
      }
    );
  }

  public sync(remote: string) {
    const remoteDatabase = new PouchDB(remote);
    this.database.sync(remoteDatabase, {
      live: true
    }).on('change', change => {
      this.listener.emit(change);
    }).on('error', error => {
      console.error(JSON.stringify(error));
    });
  }

  buildIndexes(indexes: string[]): void {
    for (const index of indexes) {
      this.database.createIndex({
        index: {fields: [index]}
      });
    }
  }

  public getChangeListener() {
    return this.listener;
  }

}
