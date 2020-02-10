import { Component } from '@angular/core';
import {  BarcodeScanner  } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';

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

  constructor(  private barCodeScanner: BarcodeScanner, 
                private dataLocal: DataLocalService   ) {}


  ionViewWillEnter() {
    this.scann();
  }

  scann() {
    this.barCodeScanner.scan().then( barcodeData => {
      if( !barcodeData.cancelled  ) {
        this.dataLocal.guardarRegistro( barcodeData.format, barcodeData.text )
      }

      console.log('barcode', barcodeData)
    } )
    .catch( err => { 
      console.log(err);
      this.dataLocal.guardarRegistro('QRcode', 'https://fernando-herrera.com');
     } )
  }

}
