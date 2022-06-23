import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnderconstructionPageRoutingModule } from './underconstruction-routing.module';

import { UnderconstructionPage } from './underconstruction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnderconstructionPageRoutingModule
  ],
  declarations: [UnderconstructionPage]
})
export class UnderconstructionPageModule {}
