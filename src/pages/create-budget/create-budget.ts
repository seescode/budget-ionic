import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'create-budget',
  templateUrl: 'create-budget.html'
})
export class CreateBudgetPage {

  budgetName: string;
  budgetAmount: string;
  budgetStartDate;
  budgetEndDate;

  constructor(public viewCtrl: ViewController, public store: Store<AppState>,
    public actions: ActionsCreatorService) {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  addBudget() {

    this.store.dispatch(this.actions.addBudget(this.budgetName, '',
      parseFloat(this.budgetAmount), this.budgetStartDate, this.budgetEndDate));

    this.viewCtrl.dismiss();    
  }

}
