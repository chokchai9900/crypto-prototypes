import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoTransferEditTwoPage } from './crypto-transfer-edit-two.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoTransferEditTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoTransferEditTwoPageRoutingModule {}
