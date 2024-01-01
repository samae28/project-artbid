import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSeeallauctionPageRoutingModule } from './modal-seeallauction-routing.module';

import { ModalSeeallauctionPage } from './modal-seeallauction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSeeallauctionPageRoutingModule
  ],
  declarations: [ModalSeeallauctionPage]
})
export class ModalSeeallauctionPageModule {}
