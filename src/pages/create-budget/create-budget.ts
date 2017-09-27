import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'create-budget',
  templateUrl: 'create-budget.html'
})
export class CreateBudgetPage {

  budgetStartDate;
  budgetEndDate;

  constructor(public viewCtrl: ViewController) {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  addBudget() {
    this.viewCtrl.dismiss();    
  }

}
