import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoTransferEditPageRoutingModule } from './crypto-transfer-edit-routing.module';

import { CryptoTransferEditPage } from './crypto-transfer-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CryptoTransferEditPageRoutingModule
  ],
  declarations: [CryptoTransferEditPage]
})
export class CryptoTransferEditPageModule {}
