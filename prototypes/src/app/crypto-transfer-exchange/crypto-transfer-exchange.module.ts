import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoTransferExchangePageRoutingModule } from './crypto-transfer-exchange-routing.module';

import { CryptoTransferExchangePage } from './crypto-transfer-exchange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoTransferExchangePageRoutingModule
  ],
  declarations: [CryptoTransferExchangePage]
})
export class CryptoTransferExchangePageModule {}
