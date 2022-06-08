import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsentJPageRoutingModule } from './consent-j-routing.module';

import { ConsentJPage } from './consent-j.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsentJPageRoutingModule
  ],
  declarations: [ConsentJPage]
})
export class ConsentJPageModule {}
