import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoWithdrawInPageRoutingModule } from './crypto-withdraw-in-routing.module';

import { CryptoWithdrawInPage } from './crypto-withdraw-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoWithdrawInPageRoutingModule
  ],
  declarations: [CryptoWithdrawInPage]
})
export class CryptoWithdrawInPageModule {}
