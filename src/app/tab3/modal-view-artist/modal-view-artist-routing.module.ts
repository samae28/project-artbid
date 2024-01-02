import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalViewArtistPage } from './modal-view-artist.page';

const routes: Routes = [
  {
    path: '',
    component: ModalViewArtistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalViewArtistPageRoutingModule {}
