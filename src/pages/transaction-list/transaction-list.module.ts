import { NgModule } from '@angular/core';
import { IonicPageModule}  from 'ionic-angular'
import { TransactionListPage } from '../transaction-list/transaction-list';

@NgModule({
  declarations: [
    TransactionListPage
  ],
  imports: [
    IonicPageModule.forChild(TransactionListPage)   
  ],
  exports: [
    TransactionListPage
  ]
})
export class TransactionListModule {}
