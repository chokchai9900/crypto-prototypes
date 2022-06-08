import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsentJPage } from './consent-j.page';

const routes: Routes = [
  {
    path: '',
    component: ConsentJPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsentJPageRoutingModule {}
