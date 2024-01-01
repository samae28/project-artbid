import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../services/api-calls.service';
import { RepositoryValuesService } from '../../services/repository-values.service';

import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'; 

@Component({
  selector: 'app-modal-seeallauction',
  templateUrl: './modal-seeallauction.page.html',
  styleUrls: ['./modal-seeallauction.page.scss'],
})
export class ModalSeeallauctionPage implements OnInit {
  AllRecords : any

  constructor(
    private __services__: ApiCallsService, 
    private __repository__: RepositoryValuesService, 
    private modalCtrl: ModalController ) {
      this.__services__.Get_AllAuction().subscribe((res) => {  
        this.AllRecords = res;
  }) 
    }

  ngOnInit() {
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

}
