import { subcategoriesForSelectedCategorySelector } from './../../store/selectors/selectors';
import { Transaction } from './../../store/models/interfaces';
import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnDestroy } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

@Component({
  selector: 'add-transaction',
  templateUrl: 'add-transaction.html'
})
export class AddTransactionPage implements OnDestroy {

  subcategories$;
  selectedSubcategory: string;
  categories = [];
  transactionAmount: string;

  selectionSubscription;
  budgetId;
  categoryId = '';
  year;
  month;


  constructor(public navCtrl: NavController,
    private store: Store<AppState>, private actions: ActionsCreatorService) {

    this.selectionSubscription = this.store.select(s => s.selection).subscribe(selection => {
      this.budgetId = selection.budgetId;
      this.categoryId = selection.categoryId;
      this.year = selection.year;
      this.month = selection.month;
    });

    this.subcategories$ = this.store.select(subcategoriesForSelectedCategorySelector);

  }

  ngOnDestroy() {
    this.selectionSubscription.unsubscribe();
  }

  addTransaction() {
    const transaction: Transaction = {
      name: this.selectedSubcategory.toLowerCase(),
      categoryName: this.categoryId,
      amount: parseFloat(this.transactionAmount)
    };

    this.store.dispatch(this.actions.addTransaction(
      transaction, this.budgetId, this.year, this.month
    ))

    // this.viewCtrl.dismiss();
    this.navCtrl.pop();
  }

}
