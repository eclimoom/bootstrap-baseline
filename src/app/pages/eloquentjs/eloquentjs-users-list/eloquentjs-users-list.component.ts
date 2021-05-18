import { Component, OnInit } from '@angular/core';
import Eloquent from '../../../core/helpers/eloquent';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-eloquentjs-users-list',
  templateUrl: './eloquentjs-users-list.component.html',
  styleUrls: ['./eloquentjs-users-list.component.scss']
})
export class EloquentjsUsersListComponent implements OnInit {
  userModel: any;
  roleModel: any;
  permissionModel: any;
  constructor(
    public http: HttpClient,
  ) {
    Eloquent('User', {
      endpoint: 'http://eloquentjs.test/api/users',  // URL that accepts queries for this model
      dates: [
        'created_at',
        'updated_at',
      ], // columns to mutate to Date instances
      // scopes: ['published'],   // the available query scope methods
      relations: {             // map of `relationshipName: relatedModelName`
          roles: 'Role'
      }
    });
    this.userModel = Eloquent.User;

    Eloquent('Role', {
      endpoint: 'http://eloquentjs.test/api/roles',  // URL that accepts queries for this model
      dates: [
        'created_at',
        'updated_at',
      ], // columns to mutate to Date instances
      // scopes: ['published'],   // the available query scope methods
      relations: {             // map of `relationshipName: relatedModelName`
          permissions: 'Permission',
          users: 'User',
      }
    });
    this.roleModel = Eloquent.Role;

    Eloquent('Permission', {
      endpoint: 'http://eloquentjs.test/api/permissions',  // URL that accepts queries for this model
      dates: [
        'created_at',
        'updated_at',
      ], // columns to mutate to Date instances
      scopes: ['admins'],   // the available query scope methods
      relations: {             // map of `relationshipName: relatedModelName`
          roles: 'Role'
      }
    });
    this.permissionModel = Eloquent.Permission;
  }

  ngOnInit() {
    /*this.userModel
      .orderBy('id', 'ASC')
      .forPage(1)
      .limit(5)
      .get()
      .then(
        res => {
          console.log(res);
        }
      );*/
      this.getUsers();
  }

  getUsers() {
    this.http.get(environment.siteUrl + 'api/users')
    .subscribe(
      (res: any) => {
        console.log('Users OK');
      }
    );
  }

}
