import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoWithdrawManaConfirmPageRoutingModule } from './crypto-withdraw-mana-confirm-routing.module';

import { CryptoWithdrawManaConfirmPage } from './crypto-withdraw-mana-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoWithdrawManaConfirmPageRoutingModule
  ],
  declarations: [CryptoWithdrawManaConfirmPage]
})
export class CryptoWithdrawManaConfirmPageModule {}
