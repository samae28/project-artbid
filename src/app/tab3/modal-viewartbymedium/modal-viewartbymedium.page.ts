import { Component, OnInit } from '@angular/core';

import { ApiCallsService } from '../../services/api-calls.service';
import { RepositoryValuesService } from '../../services/repository-values.service'; 
import { IonicSlides, ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/tab1/modal/modal.page';

@Component({
  selector: 'app-modal-viewartbymedium',
  templateUrl: './modal-viewartbymedium.page.html',
  styleUrls: ['./modal-viewartbymedium.page.scss'],
})
export class ModalViewartbymediumPage implements OnInit {

  MediumName : any;
  ArtList : any;

  constructor(private __services__: ApiCallsService, 
    private __repository__: RepositoryValuesService, 
    private modalCtrl: ModalController) {
      this.MediumName = this.__repository__.ArtworkMediumName;
      this.__services__.Get_art_by_medium(this.__repository__.ArtworkMediumType).subscribe((res) => {   
          this.ArtList = res;
      })   
    }
  
    Get_recentAuction_View(id:number,itemName: any){
      console.log(id,itemName)
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

  ngOnInit() {
  }

}
