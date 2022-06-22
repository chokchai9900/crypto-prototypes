import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoWithdrawManaSuccessPageRoutingModule } from './crypto-withdraw-mana-success-routing.module';

import { CryptoWithdrawManaSuccessPage } from './crypto-withdraw-mana-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoWithdrawManaSuccessPageRoutingModule
  ],
  declarations: [CryptoWithdrawManaSuccessPage]
})
export class CryptoWithdrawManaSuccessPageModule {}
