import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { getSelectedBudgetName, getSelectedDate } from './../../store/selectors/selectors';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'budget-tabs.html'  
})
export class BudgetTabsPage {

  budgetName$: Observable<string>;  
  selectedDate$: Observable<string>;
  
  constructor(public store: Store<AppState>, public actions: ActionsCreatorService) {
    this.budgetName$ = this.store.select(getSelectedBudgetName);
    this.selectedDate$ = this.store.select(getSelectedDate);
  }

  previousMonth() {
    this.store.dispatch(this.actions.previousMonth());
  }

  nextMonth() {
    this.store.dispatch(this.actions.nextMonth());    
  }
}
