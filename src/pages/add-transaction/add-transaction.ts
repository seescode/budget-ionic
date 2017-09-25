import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'add-transaction',
  templateUrl: 'add-transaction.html'
})
export class AddTransactionPage {

  // TODO: move this into the store as a read only data source
  categoryMap = {
    'education': [
      'Classes',
      'College Savings'
    ],
    'food': [
      'Groceries',
      'Dining Out',
      'Alcohol'
    ],
    'fun': [
      'Entertainment',
      'Gifts'
    ],
    'home': [
      'Rent/Mortgage'
    ],
    'medical': [
      'Medical',
      'Dental'
    ],
    'stuff': [
      'Supplies',
      'Clothes',
      'Software Subscriptions'
    ],
    'transportation': [
      'Public Transportation',
      'Car',
      'Plane'
    ],
    'utilities': [
      'Electric',
      'Gas',
      'Laundry',
      'Phone',
      'Internet'
    ]
  };

  categories = [];

  constructor(public viewCtrl: ViewController, private navParams: NavParams) {
    let id = navParams.get('category');
    
    this.categories = this.categoryMap[id];
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  addTransaction() {
    this.viewCtrl.dismiss();
  }

}
