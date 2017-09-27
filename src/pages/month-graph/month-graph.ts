import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'month-graph',
  templateUrl: 'month-graph.html'
})
export class MonthGraphPage {


  single: any[] = [
    {
      "name": "Spent: $1102.05",
      "value": 1102.05
    },
    {
      "name": "Remaining: $2000.50",
      "value": 2000.50
    }
  ];
  multi: any[];

  // options
  showXAxis = true;
  gradient = false;
  xAxisLabel = '';
 
  showLegend = false;
  colorScheme = {
    domain: ['#a8385d', '#a27ea8']
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  
  onSelect() {
  }  
}
