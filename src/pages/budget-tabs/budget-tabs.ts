import { YearGraphPage } from './../year-graph/year-graph';
import { MonthGraphPage } from './../month-graph/month-graph';
import { BudgetListPage } from './../budget-list/budget-list';
import { BudgetPage } from './../budget/budget';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'budget-tabs.html'  
})
export class BudgetTabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  
  constructor() {
    this.tab1 = BudgetPage;
    this.tab2 = MonthGraphPage;
    this.tab3 = YearGraphPage;    
  }
}
