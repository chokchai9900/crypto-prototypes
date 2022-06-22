import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoTransferListPage } from './crypto-transfer-list.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoTransferListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoTransferListPageRoutingModule {}
