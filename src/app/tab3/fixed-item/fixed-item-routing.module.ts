import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixedItemPage } from './fixed-item.page';

const routes: Routes = [
  {
    path: '',
    component: FixedItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixedItemPageRoutingModule {}
