import { CreateBudgetPage } from './../create-budget/create-budget';
import { BudgetPage } from './../budget/budget';
import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';

@Component({
  selector: 'page-budget-list',
  templateUrl: 'budget-list.html'
})
export class BudgetListPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  selectBudget() {
    this.navCtrl.push(BudgetPage);
  }

  addBudget() {
    let modal = this.modalCtrl.create(CreateBudgetPage);
    modal.present();
  }
}
