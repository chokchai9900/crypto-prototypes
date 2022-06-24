import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoTransferEditOnePage } from './crypto-transfer-edit-one.page';

const routes: Routes = [
  {
    path: '',
    component: CryptoTransferEditOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoTransferEditOnePageRoutingModule {}
