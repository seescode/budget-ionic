import { CreateBudgetPage } from './../create-budget/create-budget';
import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'transaction-list',
  templateUrl: 'transaction-list.html'
})
export class TransactionListPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  deleteTransaction(transactionId) {


  }
}
