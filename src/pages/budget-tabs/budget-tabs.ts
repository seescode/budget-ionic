import { Component } from '@angular/core';

@Component({
  templateUrl: 'budget-tabs.html'  
})
export class BudgetTabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  
  constructor() {
    this.tab1 = 'BudgetPage';
    this.tab2 = 'MonthGraphPage';
    this.tab3 = 'TotalGraphPage';    
  }
}
