import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'ui',
    loadChildren: () => import('./ui/ui.module').then(m => m.UiModule)
  },
  {
    path: 'apps',
    loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./other/other.module').then(m => m.OtherModule)
  },
  {
    path: 'pouchdb',
    loadChildren: () => import('./puchdb/puchdb.module').then(m => m.PuchdbModule),
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then(m => m.TestModule),
  },
  {
    path: 'eloquentjs',
    loadChildren: () => import('./eloquentjs/eloquentjs.module').then(m => m.EloquentjsModule),
  },
  {
    path: 'laravel-crud',
    loadChildren: () => import('./laravel-crud/laravel-crud.module').then(m => m.LaravelCrudModule),
  },
  {
    path: 'developer',
    loadChildren: () => import('./developer/developer.module').then(m => m.DeveloperModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
