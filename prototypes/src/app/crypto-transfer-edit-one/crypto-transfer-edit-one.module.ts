import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoTransferEditOnePageRoutingModule } from './crypto-transfer-edit-one-routing.module';

import { CryptoTransferEditOnePage } from './crypto-transfer-edit-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CryptoTransferEditOnePageRoutingModule
  ],
  declarations: [CryptoTransferEditOnePage]
})
export class CryptoTransferEditOnePageModule {}
