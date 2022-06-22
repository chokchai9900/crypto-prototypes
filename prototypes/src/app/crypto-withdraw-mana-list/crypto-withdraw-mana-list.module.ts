import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoWithdrawManaListPageRoutingModule } from './crypto-withdraw-mana-list-routing.module';

import { CryptoWithdrawManaListPage } from './crypto-withdraw-mana-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoWithdrawManaListPageRoutingModule
  ],
  declarations: [CryptoWithdrawManaListPage]
})
export class CryptoWithdrawManaListPageModule {}
