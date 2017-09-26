import { MonthGraphPage } from './month-graph';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    MonthGraphPage
  ],
  imports: [
    IonicPageModule.forChild(MonthGraphPage),
    NgxChartsModule    
  ],
  exports: [
    MonthGraphPage    
  ]
})
export class MonthGraphModule {}
