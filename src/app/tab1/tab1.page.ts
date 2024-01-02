
import { ApiCallsService } from '../services/api-calls.service';
import { RepositoryValuesService } from '../services/repository-values.service';

import { Component, ViewChild } from '@angular/core'; 
import { IonicSlides, ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
import { ModalSeeallauctionPage } from './modal-seeallauction/modal-seeallauction.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  swiperModules = [IonicSlides];

  containerHeight = '300px'; // Set the initial height
  RecentAuctionRecords : any
  FeaturedArtists : any

  // Example function to dynamically change the height
  changeHeight() {
    this.containerHeight = '300px'; // Change the height dynamically
  } 
  constructor(
    private __services__: ApiCallsService, 
    private __repository__: RepositoryValuesService, 
    private modalCtrl: ModalController) {
      this.__services__.Get_recentAuction().subscribe((res) => {  
            this.RecentAuctionRecords = res; 
      }) 
      
      this.__services__.Get_featured_artists().subscribe((res) => {  
            this.FeaturedArtists = res; 
      }) 
  }

  

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

  async SeeAllAuction() {  
    const modal = await this.modalCtrl.create({
      component: ModalSeeallauctionPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') { 
    }
  }
  
}
