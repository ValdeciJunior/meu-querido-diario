import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiasPage } from './dias';

@NgModule({
  declarations: [
    DiasPage,
  ],
  imports: [
    IonicPageModule.forChild(DiasPage),
  ],
})
export class DiasPageModule {}
