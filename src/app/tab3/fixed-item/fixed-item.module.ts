import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixedItemPageRoutingModule } from './fixed-item-routing.module';

import { FixedItemPage } from './fixed-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixedItemPageRoutingModule
  ],
  declarations: [FixedItemPage]
})
export class FixedItemPageModule {}
