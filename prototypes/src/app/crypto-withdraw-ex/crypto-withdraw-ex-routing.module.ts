import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoWithdrawExPage } from './crypto-withdraw-ex.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoWithdrawExPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoWithdrawExPageRoutingModule {}
