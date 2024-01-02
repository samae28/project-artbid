import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalViewArtistPageRoutingModule } from './modal-view-artist-routing.module';

import { ModalViewArtistPage } from './modal-view-artist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalViewArtistPageRoutingModule
  ],
  declarations: [ModalViewArtistPage]
})
export class ModalViewArtistPageModule {}
