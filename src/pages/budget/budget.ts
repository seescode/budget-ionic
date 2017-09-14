import { AddTransactionPage } from './../add-transaction/add-transaction';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  addTransaction() {
    let modal = this.modalCtrl.create(AddTransactionPage);
    modal.present();    
  }

}
