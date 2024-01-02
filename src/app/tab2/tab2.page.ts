import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ApiCallsService } from '../services/api-calls.service';
import { RepositoryValuesService } from '../services/repository-values.service';

import { IonicSlides, ModalController } from '@ionic/angular';
import { ModalPage } from '../tab1/modal/modal.page'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {  
  
  auction_current : any
  auction_upcoming : any
  auction_past : any

  constructor(
    private __services__: ApiCallsService, 
    private __repository__: RepositoryValuesService, 
    private modalCtrl: ModalController) {

      this.__services__.Get_recentAuction_current().subscribe((res) => {   
          this.auction_current = res 
      })  

      this.__services__.Get_recentAuction_upcoming().subscribe((res) => {   
          this.auction_upcoming = res 
      })  

      this.__services__.Get_recentAuction_past().subscribe((res) => {   
          this.auction_past = res 
      })  
    }

  selectedSegment: string = 'current';


  Get_recentAuction_View(id:number,itemName: any){
    this.openModal(id, itemName); 
  }
  
  async openModal(id: number, itemName: any) { 
    this.__repository__.AuctionViewing = id;
    this.__repository__.AuctionItemName = itemName
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') { 
    }
  }

  segmentChanged() {
    // Handle segment change if needed
    console.log('Selected Segment:', this.selectedSegment);
  }

}
