import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoDepositQrEditPage } from './crypto-deposit-qr-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoDepositQrEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoDepositQrEditPageRoutingModule {}
