import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoDepositQrEditPageRoutingModule } from './crypto-deposit-qr-edit-routing.module';

import { CryptoDepositQrEditPage } from './crypto-deposit-qr-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoDepositQrEditPageRoutingModule
  ],
  declarations: [CryptoDepositQrEditPage]
})
export class CryptoDepositQrEditPageModule {}
