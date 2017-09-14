import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'create-budget',
  templateUrl: 'create-budget.html'
})
export class CreateBudgetPage {

  constructor(public viewCtrl: ViewController) {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  addBudget() {
    this.viewCtrl.dismiss();    
  }

}
