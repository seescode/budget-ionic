import { categoryTransactionsSelector } from './../../store/selectors/selectors';
import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

@Component({
  selector: 'transaction-list',
  templateUrl: 'transaction-list.html'
})
export class TransactionListPage {

  transactions$;

  constructor(private store: Store<AppState>, private actions: ActionsCreatorService) {
    this.transactions$ = this.store.select(categoryTransactionsSelector);
  }

  deleteTransaction(transaction) {
    this.store.dispatch(this.actions.removeTransaction(transaction));    
  }
}
