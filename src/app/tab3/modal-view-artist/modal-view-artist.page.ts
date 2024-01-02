import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../services/api-calls.service';
import { RepositoryValuesService } from '../../services/repository-values.service';
import { IonicSlides, ModalController } from '@ionic/angular'; 
import { ModalPage } from 'src/app/tab1/modal/modal.page';

@Component({
  selector: 'app-modal-view-artist',
  templateUrl: './modal-view-artist.page.html',
  styleUrls: ['./modal-view-artist.page.scss'],
})
export class ModalViewArtistPage implements OnInit {

  artistData : any;
  artistArtwork : any;
  
  constructor(
    private __services__: ApiCallsService, 
    private __repository__: RepositoryValuesService, 
    private modalCtrl: ModalController ) {
      this.__services__.Get_singleArtist(this.__repository__.ArtistID).subscribe((res) => {   
        this.artistData = res  
      })  

      this.__services__.Get_ArtworkByArtist(this.__repository__.ArtistID).subscribe((res) => {   
        this.artistArtwork = res 
        console.log(res)
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

  ngOnInit() {
  }

}
