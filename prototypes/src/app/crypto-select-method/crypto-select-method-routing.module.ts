import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoSelectMethodPage } from './crypto-select-method.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoSelectMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoSelectMethodPageRoutingModule {}
