import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoWalletPage } from './crypto-wallet.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoWalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoWalletPageRoutingModule {}
