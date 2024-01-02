import { Component } from '@angular/core';

import { ApiCallsService } from '../services/api-calls.service';
import { RepositoryValuesService } from '../services/repository-values.service';

import { IonicSlides, ModalController } from '@ionic/angular';
import { ModalPage } from '../tab1/modal/modal.page'; 
import { ModalViewartbymediumPage } from './modal-viewartbymedium/modal-viewartbymedium.page';
import { ModalViewArtistPage } from './modal-view-artist/modal-view-artist.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  artMediumList : any
  ArtistList : any

  constructor(private __services__: ApiCallsService, 
    private __repository__: RepositoryValuesService,
    private modalCtrl: ModalController) {
      this.__services__.Get_art_medium().subscribe((res) => {   
        this.artMediumList = res 
      })   

      this.__services__.get_artists_list().subscribe((res) => {   
        this.ArtistList = res 
      })   
    }

  selectedSegment: string = 'medium';

  segmentChanged() {
    // Handle segment change if needed
    console.log('Selected Segment:', this.selectedSegment);
  }


  viweArtByMedium(type: any, name: any){
    this.__repository__.ArtworkMediumType = type;
    this.__repository__.ArtworkMediumName = name; 
    this.ArtByMediumModal();
  }
  
  async ArtByMediumModal() {  
    const modal = await this.modalCtrl.create({
      component: ModalViewartbymediumPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') { 
    }
  }

  async ViewArtist(ID: any) {  
    this.__repository__.ArtistID = ID;
    const modal = await this.modalCtrl.create({
      component: ModalViewArtistPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') { 
    }
  }
}
