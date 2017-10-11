import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'create-budget',
  templateUrl: 'create-budget.html'
})
export class CreateBudgetPage {
  budget: FormGroup;

  constructor(public navCtrl: NavController, public store: Store<AppState>,
    public actions: ActionsCreatorService) {

    // Great article on reactive forms:
    // https://toddmotto.com/reactive-formgroup-validation-angular-2
    this.budget = new FormGroup({
      budgetName: new FormControl(null, [Validators.required]),
      budgetAmount: new FormControl(null, [Validators.required, this.positiveNumber]),
      budgetDate: new FormGroup({
        budgetStartDate: new FormControl(null),
        budgetEndDate: new FormControl(null)
      }, this.endDateIsAfterStartDate.bind(this))
    });
  }

  addBudget() {
    const inputs = this.budget.value;
    const startDate = this.getMomentDate(inputs.budgetDate.budgetStartDate);
    const endDate = this.getMomentDate(inputs.budgetDate.budgetEndDate);

    this.store.dispatch(this.actions.addBudget(inputs.budgetName, '',
      parseFloat(inputs.budgetAmount), startDate.toDate(), endDate.toDate()));

    this.navCtrl.pop();
  }

  positiveNumber(control: FormControl): { [s: string]: boolean } {

    if (control.value && control.value.match(/^\d+\.?\d?\d?$/)) {
      return null;
    }

    return { 'invalidNumber': true };
  }

  getMomentDate(budgetDate) {
    const parsedDate = budgetDate.split('-');
    return moment([parsedDate[0], parsedDate[1] - 1]);
  }

  endDateIsAfterStartDate(control: AbstractControl): { [key: string]: boolean } {

    const budgetStartDate = control.get('budgetStartDate').value;
    const budgetEndDate = control.get('budgetEndDate').value;

    if (budgetStartDate == null || budgetEndDate == null) {
      return { 'startDateIsAfterEndDate': true };
    }

    const startDate = this.getMomentDate(budgetStartDate);
    const endDate = this.getMomentDate(budgetEndDate);

    if (startDate.isAfter(endDate)) {
      console.log('startDateIsAfterEndDate');
      return { 'startDateIsAfterEndDate': true };
    }

    return null;
  };
}
