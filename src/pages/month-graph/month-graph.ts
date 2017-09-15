import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';

@Component({
  selector: 'month-graph',
  templateUrl: 'month-graph.html'
})
export class MonthGraphPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
}
