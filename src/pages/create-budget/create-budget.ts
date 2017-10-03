import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import * as moment from 'moment';

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

    let startDate, endDate;
    [startDate, endDate] = this.validateStartDateIsBeforeEndDate(this.budgetStartDate, this.budgetEndDate);

    this.store.dispatch(this.actions.addBudget(this.budgetName, '',
      parseFloat(this.budgetAmount), startDate, endDate));

    this.viewCtrl.dismiss();    
  }

  // validateRequiredData(budgetName: string, details: string, budgetAmount: string, budgetStartDate: string, budgetEndDate: string) {
  //   if (budgetName == null || budgetName.trim() === '') {
  //     this.missingBudgetName = true;
  //   } else {
  //     this.missingBudgetName = false;
  //   }

  //   if (budgetAmount.trim() === '') {
  //     this.missingBudgetAmount = true;
  //   } else {
  //     this.missingBudgetAmount = false;
  //   }

  //   if (budgetStartDate.trim() === '') {
  //     this.missingBudgetStart = true;
  //   } else {
  //     this.missingBudgetStart = false;
  //   }

  //   if (budgetEndDate.trim() === '') {
  //     this.missingBudgetFinish = true;
  //   } else {
  //     this.missingBudgetFinish = false;
  //   }
  // }

  validateStartDateIsBeforeEndDate(budgetStartDate: string, budgetEndDate: string) {

    const parsedBeginDate = budgetStartDate.split('-');
    const parsedEndDate = budgetEndDate.split('-');

    const startDate = moment([parsedBeginDate[0], parsedBeginDate[1]]);
    const endDate = moment([parsedEndDate[0], parsedEndDate[1]]);
    
    // if (startDate.isAfter(endDate)) {
    //   this.budgetFinishIsBeforeBudgetStart = true;
    // } else {
    //   this.budgetFinishIsBeforeBudgetStart = false;
    // }
    return [startDate.toDate(), endDate.toDate()];
  }

  // create(budgetName: string, details: string, budgetAmount: string, budgetStartDate: string, budgetEndDate: string) {

  //   this.validateRequiredData(budgetName, details, budgetAmount, budgetStartDate, budgetEndDate);

  //   let startDate, endDate;
  //   [startDate, endDate] = this.validateStartDateIsBeforeEndDate(budgetStartDate, budgetEndDate);

  //   if (this.missingBudgetName ||
  //     this.missingBudgetAmount ||
  //     this.missingBudgetStart ||
  //     this.missingBudgetFinish ||
  //     this.budgetFinishIsBeforeBudgetStart) {
  //     return;
  //   }

  //   const action = this.actionsCreatorService.addBudget(
  //     budgetName,
  //     details,
  //     parseInt(budgetAmount),
  //     startDate.toDate(),
  //     endDate.toDate()
  //   )

  //   this.store.dispatch(action);

  //   this.router.navigateByUrl('/budget-list');
  // }  

}
