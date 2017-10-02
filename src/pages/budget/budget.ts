import { ActionsCreatorService } from './../../store/actions/actionsCreatorService';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AppState } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnDestroy } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage implements OnDestroy {

  categories$;
  selectionSubscription;
  budgetId; 

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, 
    public store: Store<AppState>, public actions: ActionsCreatorService) {
    
    this.selectionSubscription = this.store.select(s => s.selection).subscribe(selection => {
      this.budgetId = selection.budgetId;
    });

    this.categories$ = this.store.select(s => s.category);
  }

  ngOnDestroy() {
    this.selectionSubscription.unsubscribe();
  }

  addTransaction(category: string) {
    this.store.dispatch(this.actions.selectBudget(this.budgetId, category.toLowerCase()));    
    let modal = this.modalCtrl.create('AddTransactionPage');
    modal.present();    
  }

  viewTransactionList(category: string) {
    let modal = this.modalCtrl.create('TransactionListPage');
    modal.present();        
  }

}
