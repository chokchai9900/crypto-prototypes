import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoTransferExchangePage } from './crypto-transfer-exchange.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoTransferExchangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoTransferExchangePageRoutingModule {}
