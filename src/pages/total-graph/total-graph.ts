import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'total-graph',
  templateUrl: 'total-graph.html'
})
export class TotalGraphPage {


  single: any[] = [
    {
      "name": "Spent: $1102.05",
      "value": 1102.05
    },
    {
      "name": "Remaining: $2000.50",
      "value": 2000.50
    },
    {
      "name": "Surplus: $2000.50",
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
    domain: ['#a8385d', '#a27ea8', '#aae3f5']
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  
  onSelect() {
  }  
}
