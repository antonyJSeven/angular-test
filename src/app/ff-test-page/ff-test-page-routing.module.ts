import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import {FfTestPageComponent} from '@app/ff-test-page/ff-test-page.component';

const routes: Routes = [
  Route.withShell([
    { path: 'test', component: FfTestPageComponent, data: { title: extract('ff-test-page') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FfTestPageRoutingModule { }
