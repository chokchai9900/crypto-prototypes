import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoTransferConfirmPage } from './crypto-transfer-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoTransferConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoTransferConfirmPageRoutingModule {}
