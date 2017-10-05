import { TransactionListPage } from './../transaction-list/transaction-list';
import { AddTransactionPage } from './../add-transaction/add-transaction';
import { categoriesForCurrentBudget } from './../../store/selectors/selectors';
import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnDestroy } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage implements OnDestroy {

  categories$;
  selectionSubscription;
  budgetId; 
  year;
  month;

  constructor(public navCtrl: NavController, 
    public store: Store<AppState>, public actions: ActionsCreatorService) {
    
    this.selectionSubscription = this.store.select(s => s.selection).subscribe(selection => {
      this.budgetId = selection.budgetId;
      this.year = selection.year;
      this.month = selection.month;
    });

    this.categories$ = this.store.select(categoriesForCurrentBudget);
  }

  ngOnDestroy() {
    this.selectionSubscription.unsubscribe();
  }

  addTransaction(category: string) {
    this.store.dispatch(this.actions.select(this.budgetId, this.year, this.month, category.toLowerCase()));    
    this.navCtrl.push(AddTransactionPage);
  }

  viewTransactionList(category: string) {
    this.store.dispatch(this.actions.select(this.budgetId, this.year, this.month, category.toLowerCase()));
    this.navCtrl.push(TransactionListPage);
  }

}
