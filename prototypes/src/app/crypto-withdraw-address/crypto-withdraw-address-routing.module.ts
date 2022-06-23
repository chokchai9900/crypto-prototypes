import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoWithdrawAddressPage } from './crypto-withdraw-address.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoWithdrawAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoWithdrawAddressPageRoutingModule {}
