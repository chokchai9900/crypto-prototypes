import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoSelectMethodPageRoutingModule } from './crypto-select-method-routing.module';

import { CryptoSelectMethodPage } from './crypto-select-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoSelectMethodPageRoutingModule
  ],
  declarations: [CryptoSelectMethodPage]
})
export class CryptoSelectMethodPageModule {}
