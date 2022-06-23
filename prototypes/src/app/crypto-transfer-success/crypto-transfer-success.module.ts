import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoTransferSuccessPageRoutingModule } from './crypto-transfer-success-routing.module';

import { CryptoTransferSuccessPage } from './crypto-transfer-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoTransferSuccessPageRoutingModule
  ],
  declarations: [CryptoTransferSuccessPage]
})
export class CryptoTransferSuccessPageModule {}
