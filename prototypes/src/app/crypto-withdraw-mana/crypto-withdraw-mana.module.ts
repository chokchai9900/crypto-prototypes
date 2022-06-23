import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoWithdrawManaPageRoutingModule } from './crypto-withdraw-mana-routing.module';

import { CryptoWithdrawManaPage } from './crypto-withdraw-mana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoWithdrawManaPageRoutingModule
  ],
  declarations: [CryptoWithdrawManaPage]
})
export class CryptoWithdrawManaPageModule {}
