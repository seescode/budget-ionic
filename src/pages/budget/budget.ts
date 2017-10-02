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

  // TODO: Should be coming from the store.
  categories = [
    {
      icon: 'pizza',
      name: 'Food'
    },
    {
      icon: 'pricetag',
      name: 'Stuff'
    },
    {
      icon: 'car',
      name: 'Transportation'
    },
    {
      icon: 'outlet',
      name: 'Utilities'
    },
    {
      icon: 'home',
      name: 'Home'
    },
    {
      icon: 'book',
      name: 'Education'
    },
    {
      icon: 'happy',
      name: 'Fun'
    },
    {
      icon: 'heart',
      name: 'Medical'
    }
  ];

  selectionSubscription;
  budgetId; 

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, 
    public store: Store<AppState>, public actions: ActionsCreatorService) {
    
    this.selectionSubscription = this.store.select(s => s.selection).subscribe(selection => {
      this.budgetId = selection.budgetId;
    });
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
