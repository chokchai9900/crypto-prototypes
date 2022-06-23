import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoWithdrawManaPage } from './crypto-withdraw-mana.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoWithdrawManaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoWithdrawManaPageRoutingModule {}
