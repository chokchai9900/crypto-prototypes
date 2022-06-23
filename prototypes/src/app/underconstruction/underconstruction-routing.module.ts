import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderconstructionPage } from './underconstruction.page';

const routes: Routes = [
  {
    path: '',
    component: UnderconstructionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnderconstructionPageRoutingModule {}
