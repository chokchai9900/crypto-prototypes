import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoDepositQrCompletePageRoutingModule } from './crypto-deposit-qr-complete-routing.module';

import { CryptoDepositQrCompletePage } from './crypto-deposit-qr-complete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoDepositQrCompletePageRoutingModule
  ],
  declarations: [CryptoDepositQrCompletePage]
})
export class CryptoDepositQrCompletePageModule {}
