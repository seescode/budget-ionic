import { YearGraphPage } from './year-graph';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    YearGraphPage
  ],
  imports: [
    IonicPageModule.forChild(YearGraphPage),
    NgxChartsModule
  ],
  exports: [
    YearGraphPage    
  ]
})
export class YearGraphModule {}
