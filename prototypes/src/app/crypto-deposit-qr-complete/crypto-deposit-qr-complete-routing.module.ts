import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoDepositQrCompletePage } from './crypto-deposit-qr-complete.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoDepositQrCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoDepositQrCompletePageRoutingModule {}
