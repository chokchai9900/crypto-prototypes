import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoTransferEditPageRoutingModule } from './crypto-transfer-edit-routing.module';

import { CryptoTransferEditPage } from './crypto-transfer-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoTransferEditPageRoutingModule
  ],
  declarations: [CryptoTransferEditPage]
})
export class CryptoTransferEditPageModule {}
