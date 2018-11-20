import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }

  logar(user: any){
    return this.http.get(
      `http://localhost:3000/users?username=${user.username}&password=${user.password}`);
  }

  listarDias(){
    return this.http.get(
      `http://localhost:3000/dias`);
  }

  cadastrarDia(dia:any){
    return this.http.post(
      `http://localhost:3000/dias`, dia
    );
  }
  getDia(id:number){
    return this.http.get(
      `http://localhost:3000/dias/${id}`
    )
  }

  excluirDia(id:number){
    return this.http.delete(
      `http://localhost:3000/dias/${id}`
    )
  }

}
