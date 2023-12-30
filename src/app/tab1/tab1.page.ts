import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  containerHeight = '300px'; // Set the initial height

  // Example function to dynamically change the height
  changeHeight() {
    this.containerHeight = '300px'; // Change the height dynamically
  }
  constructor() {}

}
