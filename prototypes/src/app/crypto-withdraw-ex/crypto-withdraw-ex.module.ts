import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoWithdrawExPageRoutingModule } from './crypto-withdraw-ex-routing.module';

import { CryptoWithdrawExPage } from './crypto-withdraw-ex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoWithdrawExPageRoutingModule
  ],
  declarations: [CryptoWithdrawExPage]
})
export class CryptoWithdrawExPageModule {}
