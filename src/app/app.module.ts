import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {User} from '../model/user.model'
import {FormDiaPage} from '../pages/form-dia/form-dia'
import {DiasPage} from '../pages/dias/dias'
import { ApiServiceProvider } from '../providers/api-service/api-service';
import {ViewDiaPage} from '../pages/view-dia/view-dia'

@NgModule({
  declarations: [
    MyApp,
    DiasPage,
    FormDiaPage,
    ViewDiaPage,
    HomePage
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiasPage,
    FormDiaPage,
    ViewDiaPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider
  ]
})
export class AppModule {}
