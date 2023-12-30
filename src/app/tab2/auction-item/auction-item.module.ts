import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuctionItemPageRoutingModule } from './auction-item-routing.module';

import { AuctionItemPage } from './auction-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuctionItemPageRoutingModule
  ],
  declarations: [AuctionItemPage]
})
export class AuctionItemPageModule {}
