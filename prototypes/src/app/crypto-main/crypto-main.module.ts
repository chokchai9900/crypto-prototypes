import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoMainPageRoutingModule } from './crypto-main-routing.module';

import { CryptoMainPage } from './crypto-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoMainPageRoutingModule
  ],
  declarations: [CryptoMainPage]
})
export class CryptoMainPageModule {}
