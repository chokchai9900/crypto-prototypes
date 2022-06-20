import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoWalletPageRoutingModule } from './crypto-wallet-routing.module';

import { CryptoWalletPage } from './crypto-wallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoWalletPageRoutingModule
  ],
  declarations: [CryptoWalletPage]
})
export class CryptoWalletPageModule {}
