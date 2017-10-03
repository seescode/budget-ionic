import { getTotalGraph } from './../../store/selectors/selectors';
import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';
import { AppState } from '../../store/reducers/index';
import { Store } from '@ngrx/store';

@IonicPage()
@Component({
  selector: 'total-graph',
  templateUrl: 'total-graph.html'
})
export class TotalGraphPage {


  // single: any[] = [
  //   {
  //     "name": "Spent: $1102.05",
  //     "value": 1102.05
  //   },
  //   {
  //     "name": "Remaining: $2000.50",
  //     "value": 2000.50
  //   },
  //   {
  //     "name": "Surplus: $2000.50",
  //     "value": 2000.50
  //   }    
  // ];
  // multi: any[];

  // options

  colorScheme = {
    domain: ['#a8385d', '#a27ea8', '#aae3f5']
  };

  data$;

  constructor(public store: Store<AppState>) {
    this.data$ = store.select(getTotalGraph)
  }

  onSelect() {
  }
}
