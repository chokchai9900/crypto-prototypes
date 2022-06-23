import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoTransactionWaitingResultPage } from './crypto-transaction-waiting-result.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoTransactionWaitingResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoTransactionWaitingResultPageRoutingModule {}
