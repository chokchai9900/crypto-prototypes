import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoTransferListPageRoutingModule } from './crypto-transfer-list-routing.module';

import { CryptoTransferListPage } from './crypto-transfer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoTransferListPageRoutingModule
  ],
  declarations: [CryptoTransferListPage]
})
export class CryptoTransferListPageModule {}
