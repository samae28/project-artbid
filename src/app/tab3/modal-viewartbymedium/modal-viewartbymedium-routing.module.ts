import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalViewartbymediumPage } from './modal-viewartbymedium.page';

const routes: Routes = [
  {
    path: '',
    component: ModalViewartbymediumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalViewartbymediumPageRoutingModule {}
