import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service'
import {User} from '../../model/user.model'
import {DiasPage} from '../dias/dias'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user:any = {username:"", password:""}

  constructor(public navCtrl: NavController, private apiService: ApiServiceProvider) {

  }

  logar(){
    this.apiService.logar(this.user).subscribe(response =>{
      if(response.length > 0){
        this.navCtrl.push(DiasPage)
      }
    })
  }

}
