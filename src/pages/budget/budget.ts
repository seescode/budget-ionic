import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {

  // TODO: Should be coming from the store.
  categories = [
    {
      icon: 'pizza',
      name: 'Food'
    },
    {
      icon: 'pricetag',
      name: 'Stuff'
    },
    {
      icon: 'car',
      name: 'Transportation'
    },
    {
      icon: 'outlet',
      name: 'Utilities'
    },
    {
      icon: 'home',
      name: 'Home'
    },
    {
      icon: 'book',
      name: 'Education'
    },
    {
      icon: 'happy',
      name: 'Fun'
    },
    {
      icon: 'heart',
      name: 'Medical'
    }
  ];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  addTransaction(category: string) {
    let modal = this.modalCtrl.create('AddTransactionPage', { category: category.toLowerCase() });
    modal.present();    
  }

}
