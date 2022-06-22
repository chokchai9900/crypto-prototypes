import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoTransferEditPage } from './crypto-transfer-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoTransferEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoTransferEditPageRoutingModule {}
