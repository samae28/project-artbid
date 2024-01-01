import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {  
  
  constructor() {}

  selectedSegment: string = 'current';

  segmentChanged() {
    // Handle segment change if needed
    console.log('Selected Segment:', this.selectedSegment);
  }

}
