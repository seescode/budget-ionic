import { YearGraphPage } from './year-graph';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    YearGraphPage
  ],
  imports: [
    IonicPageModule.forChild(YearGraphPage),
  ],
  exports: [
    YearGraphPage    
  ]
})
export class YearGraphModule {}
