import { TotalGraphPage } from './total-graph';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    TotalGraphPage
  ],
  imports: [
    IonicPageModule.forChild(TotalGraphPage),
    NgxChartsModule
  ],
  exports: [
    TotalGraphPage    
  ]
})
export class TotalGraphModule {}
