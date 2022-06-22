import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoWalletDetailPageRoutingModule } from './crypto-wallet-detail-routing.module';

import { CryptoWalletDetailPage } from './crypto-wallet-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoWalletDetailPageRoutingModule
  ],
  declarations: [CryptoWalletDetailPage]
})
export class CryptoWalletDetailPageModule {}
