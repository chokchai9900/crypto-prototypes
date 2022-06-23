import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoTransferSuccessPage } from './crypto-transfer-success.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoTransferSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoTransferSuccessPageRoutingModule {}
