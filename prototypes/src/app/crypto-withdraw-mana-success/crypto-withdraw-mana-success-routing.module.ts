import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoWithdrawManaSuccessPage } from './crypto-withdraw-mana-success.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoWithdrawManaSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoWithdrawManaSuccessPageRoutingModule {}
