import { BudgetPage } from './budget';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    BudgetPage
  ],
  imports: [
    IonicPageModule.forChild(BudgetPage),
  ],
  exports: [
    BudgetPage    
  ]
})
export class BudgetModule {}
