import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service'
/**
 * Generated class for the DiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dias',
  templateUrl: 'dias.html',
})
export class DiasPage {
  dias:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiServiceProvider) {
  }

  ionViewDidLoad() {
    this.apiService.listarDias().subscribe(response =>{
      this.dias = response
    })
  }

}
