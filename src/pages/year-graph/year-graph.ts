import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'year-graph',
  templateUrl: 'year-graph.html'
})
export class YearGraphPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
}
