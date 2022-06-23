import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoTransactionWaitingResultPageRoutingModule } from './crypto-transaction-waiting-result-routing.module';

import { CryptoTransactionWaitingResultPage } from './crypto-transaction-waiting-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoTransactionWaitingResultPageRoutingModule
  ],
  declarations: [CryptoTransactionWaitingResultPage]
})
export class CryptoTransactionWaitingResultPageModule {}
