import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuctionItemPage } from './auction-item.page';

const routes: Routes = [
  {
    path: '',
    component: AuctionItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuctionItemPageRoutingModule {}
