import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoMainPage } from './crypto-main.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoMainPageRoutingModule {}
