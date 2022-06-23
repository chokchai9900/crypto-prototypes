import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoWithdrawManaConfirmPage } from './crypto-withdraw-mana-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoWithdrawManaConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoWithdrawManaConfirmPageRoutingModule {}
