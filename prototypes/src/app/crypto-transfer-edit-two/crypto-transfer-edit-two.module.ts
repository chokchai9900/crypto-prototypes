import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoTransferEditTwoPageRoutingModule } from './crypto-transfer-edit-two-routing.module';

import { CryptoTransferEditTwoPage } from './crypto-transfer-edit-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoTransferEditTwoPageRoutingModule
  ],
  declarations: [CryptoTransferEditTwoPage]
})
export class CryptoTransferEditTwoPageModule {}
