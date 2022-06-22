import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoTransferConfirmPageRoutingModule } from './crypto-transfer-confirm-routing.module';

import { CryptoTransferConfirmPage } from './crypto-transfer-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoTransferConfirmPageRoutingModule
  ],
  declarations: [CryptoTransferConfirmPage]
})
export class CryptoTransferConfirmPageModule {}
