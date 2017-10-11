import { FormGroup, FormControl, Validators } from '@angular/forms';
import { subcategoriesForSelectedCategorySelector } from './../../store/selectors/selectors';
import { Transaction } from './../../store/models/interfaces';
import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'add-transaction',
  templateUrl: 'add-transaction.html'
})
export class AddTransactionPage implements OnDestroy {
  transaction: FormGroup;
  subcategories$;

  selectionSubscription;
  budgetId;
  categoryId = '';
  year;
  month;


  constructor(public navCtrl: NavController,
    private store: Store<AppState>, private actions: ActionsCreatorService) {

    this.transaction = new FormGroup({
      selectedSubcategory: new FormControl(null, [Validators.required]),
      transactionAmount: new FormControl(null, [Validators.required, this.validAmount])
    })

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

  validAmount(control: FormControl): { [s: string]: boolean } {

    if (control.value && control.value.match(/^\d+\.?\d?\d?$/)) {
      return null;
    }

    return { 'invalidNumber': true };
  }

  addTransaction() {
    const inputs = this.transaction.value;

    const transaction: Transaction = {
      name: inputs.selectedSubcategory.toLowerCase(),
      categoryName: this.categoryId,
      amount: parseFloat(inputs.transactionAmount)
    };

    this.store.dispatch(this.actions.addTransaction(
      transaction, this.budgetId, this.year, this.month
    ))

    this.navCtrl.pop();
  }

}
