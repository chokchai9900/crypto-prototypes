import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoWalletDetailPage } from './crypto-wallet-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoWalletDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoWalletDetailPageRoutingModule {}
