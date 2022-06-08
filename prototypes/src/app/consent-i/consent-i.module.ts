import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentIPageRoutingModule } from './consent-i-routing.module';

import { ConsentIPage } from './consent-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsentIPageRoutingModule
  ],
  declarations: [ConsentIPage]
})
export class ConsentIPageModule {}
