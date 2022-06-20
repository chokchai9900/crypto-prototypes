import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoDepositPage } from './crypto-deposit.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoDepositPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoDepositPageRoutingModule {}
