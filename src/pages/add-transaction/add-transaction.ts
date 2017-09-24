import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'add-transaction',
  templateUrl: 'add-transaction.html'
})
export class AddTransactionPage {


  categories = [
    'Public Transportation',
    'Car',
    'Plane'
  ];

  constructor(public viewCtrl: ViewController) {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  addTransaction() {
    this.viewCtrl.dismiss();
  }

}
