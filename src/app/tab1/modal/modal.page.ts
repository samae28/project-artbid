import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiCallsService } from '../../services/api-calls.service';
import { RepositoryValuesService } from '../../services/repository-values.service';
import { ActionSheetController } from '@ionic/angular';
 
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  ActiveAuction : any;
  ActiveAuctionArray: any;

  constructor(private __services__: ApiCallsService, 
    private __repository__: RepositoryValuesService,
    private actionSheetCtrl: ActionSheetController) {
      this.ActiveAuction = this.__repository__.AuctionItemName;

      this.__services__.View_auction_item(this.__repository__.AuctionViewing).subscribe((res) => {   
        console.log(res);
        this.ActiveAuctionArray = res; 
      }) 
    }
       
    canDismiss = async () => {
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Are you sure?',
        buttons: [
          {
            text: 'Yes',
            role: 'confirm',
          },
          {
            text: 'No',
            role: 'cancel',
          },
        ],
      });
  
      actionSheet.present();
  
      const { role } = await actionSheet.onWillDismiss();
  
      return role === 'confirm';
    };

  ngOnInit() {
  }

}
