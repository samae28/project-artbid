import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSeeallauctionPage } from './modal-seeallauction.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSeeallauctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSeeallauctionPageRoutingModule {}
