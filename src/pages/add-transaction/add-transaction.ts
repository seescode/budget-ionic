import { Transaction } from './../../store/models/interfaces';
import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnDestroy } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'add-transaction',
  templateUrl: 'add-transaction.html'
})
export class AddTransactionPage implements OnDestroy {

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

  subCategory: string;
  categories = [];
  transactionAmount: string;

  selectionSubscription;
  budgetId;
  categoryId = '';
  year;
  month;


  constructor(public viewCtrl: ViewController, private navParams: NavParams,
    private store: Store<AppState>, private actions: ActionsCreatorService) {

    this.selectionSubscription = this.store.select(s => s.selection).subscribe(selection => {
      this.budgetId = selection.budgetId;
      this.categoryId = selection.categoryId;
      this.year = selection.year;
      this.month = selection.month;
    });

    // TODO once categoryMap is in the store, make this reactive
    this.categories = this.categoryMap[this.categoryId];
  }

  ngOnDestroy() {
    this.selectionSubscription.unsubscribe();
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  addTransaction() {
    const transaction: Transaction = {
      name: this.subCategory.toLowerCase(),
      categoryName: this.categoryId,
      amount: parseFloat(this.transactionAmount)
    };

    this.store.dispatch(this.actions.addTransaction(
      transaction, this.budgetId, this.year, this.month
    ))

    this.viewCtrl.dismiss();
  }

}
