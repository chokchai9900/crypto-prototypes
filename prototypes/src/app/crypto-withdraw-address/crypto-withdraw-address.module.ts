import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoWithdrawAddressPageRoutingModule } from './crypto-withdraw-address-routing.module';

import { CryptoWithdrawAddressPage } from './crypto-withdraw-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CryptoWithdrawAddressPageRoutingModule
  ],
  declarations: [CryptoWithdrawAddressPage]
})
export class CryptoWithdrawAddressPageModule {}
