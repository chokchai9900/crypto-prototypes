import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoWithdrawInPage } from './crypto-withdraw-in.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoWithdrawInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoWithdrawInPageRoutingModule {}
