import { Observable } from 'rxjs/Observable';
import { Budget } from './../../store/models/interfaces';
import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { CreateBudgetPage } from './../create-budget/create-budget';
import { BudgetTabsPage } from './../budget-tabs/budget-tabs';
import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';

@Component({
  selector: 'page-budget-list',
  templateUrl: 'budget-list.html'
})
export class BudgetListPage {

  budgetList$: Observable<Budget[]>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public store: Store<AppState>,
    public actions: ActionsCreatorService) {
    this.budgetList$ = this.store.select(n => n.budget);
  }

  selectBudget(budget: Budget) {
    this.store.dispatch(this.actions.loadBudgetData(budget.id));    
    this.store.dispatch(this.actions.selectBudget(budget.id));
    this.navCtrl.push(BudgetTabsPage);
  }

  addBudget() {
    //let modal = this.modalCtrl.create(CreateBudgetPage);
    //modal.present();
    this.navCtrl.push(CreateBudgetPage);    
  }

  deleteBudget(budget: Budget) {
    this.store.dispatch(this.actions.removeBudget(budget.id));
  }
}
