import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {ErrorInterceptor} from './core/helpers/error.interceptor';
import {JwtInterceptor} from './core/helpers/jwt.interceptor';
import {FakeBackendProvider} from './core/helpers/fake-backend';

import {LayoutsModule} from './layouts/layouts.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PuchdbModule} from './pages/puchdb/puchdb.module';
import {PouchdbService} from './core/services/pouchdb.service';
import {EloquentjsModule} from './pages/eloquentjs/eloquentjs.module';
import {LocalStorageBackendInterceptor} from './core/helpers/local-storage-backend';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ConnectionServiceOptions, ConnectionServiceOptionsToken} from './core/services/internet-connection.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutsModule,
    AppRoutingModule,
    PuchdbModule,
    EloquentjsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LocalStorageBackendInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    // provider used to create fake backend
    FakeBackendProvider,
    // PouchDB Connector
    PouchdbService,
    {
      provide: ConnectionServiceOptionsToken,
      useValue: {
        enableHeartbeat: true,
        heartbeatUrl: 'http://lapp-baseline.test/api/test',
        requestMethod: 'get',
        heartbeatInterval: 10000
      } as ConnectionServiceOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
