import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'add-transaction',
  templateUrl: 'add-transaction.html'
})
export class AddTransactionPage {

  constructor(public viewCtrl: ViewController) {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  addTransaction() {
    this.viewCtrl.dismiss();    
  }

}
