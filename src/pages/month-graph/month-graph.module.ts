import { MonthGraphPage } from './month-graph';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MonthGraphPage
  ],
  imports: [
    IonicPageModule.forChild(MonthGraphPage),
  ],
  exports: [
    MonthGraphPage    
  ]
})
export class MonthGraphModule {}
