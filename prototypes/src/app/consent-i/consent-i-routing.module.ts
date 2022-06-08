import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentIPage } from './consent-i.page';

const routes: Routes = [
  {
    path: '',
    component: ConsentIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsentIPageRoutingModule {}
