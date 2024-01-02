import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalViewartbymediumPageRoutingModule } from './modal-viewartbymedium-routing.module';

import { ModalViewartbymediumPage } from './modal-viewartbymedium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalViewartbymediumPageRoutingModule
  ],
  declarations: [ModalViewartbymediumPage]
})
export class ModalViewartbymediumPageModule {}
