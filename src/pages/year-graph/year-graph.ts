import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';

@Component({
  selector: 'year-graph',
  templateUrl: 'year-graph.html'
})
export class YearGraphPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
}
