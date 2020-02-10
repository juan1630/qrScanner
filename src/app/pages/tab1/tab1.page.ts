import { Component } from '@angular/core';
import {  BarcodeScanner  } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  swiperOpts={
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(  private barCodeScanner: BarcodeScanner   ) {}


  ionViewWillEnter() {
    this.scann();
  }

  scann() {
    this.barCodeScanner.scan().then( barcodeData => {
      console.log('barcode', barcodeData)
    } )
    .catch( err => { 
      console.log(err);
     } )
  }

}
