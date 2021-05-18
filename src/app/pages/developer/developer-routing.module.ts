import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DeveloperComponent} from './developer.component';


const routes: Routes = [
  {
    path: '',
    component: DeveloperComponent,
  },
  {
    path: 'er-diagram',
    loadChildren: () => import('./er-diagram/er-diagram.module').then(m => m.ErDiagramModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperRoutingModule {
}
