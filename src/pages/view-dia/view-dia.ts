import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import {DiasPage} from '../dias/dias'

/**
 * Generated class for the ViewDiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-dia',
  templateUrl: 'view-dia.html',
})
export class ViewDiaPage {
  id:number;
  dia:any = {id:"", titulo:"", conteudo:"", dhc:""};

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiServiceProvider) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    this.apiService.getDia(this.id).subscribe(response =>{
      this.dia = response;
    })
  }

  excluir(id:number){
    this.apiService.excluirDia(id).subscribe(response =>{
      this.navCtrl.setRoot(DiasPage)
    })
  }

}
