import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import { Pipe, PipeTransform } from '@angular/core'
import {DiasPage} from '../dias/dias'

@Pipe({
   name: 'formatDate'
})

/**
 * Generated class for the FormDiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-dia',
  templateUrl: 'form-dia.html',
})
export class FormDiaPage {
  dia: any = {titulo:"", conteudo:"", dhc:""}

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private apiService: ApiServiceProvider) {
  }

  ionViewDidLoad() {

  }

  cadastrar(){
    this.dia.dhc = this.dia.dhc.split("-").reverse().join("/")
    this.apiService.cadastrarDia(this.dia).subscribe(response =>{
      this.navCtrl.push(DiasPage)
    })
  }

}
