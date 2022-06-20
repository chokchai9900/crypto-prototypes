import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoDepositPageRoutingModule } from './crypto-deposit-routing.module';

import { CryptoDepositPage } from './crypto-deposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoDepositPageRoutingModule
  ],
  declarations: [CryptoDepositPage]
})
export class CryptoDepositPageModule {}
