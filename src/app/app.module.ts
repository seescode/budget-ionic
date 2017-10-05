import { TotalGraphPage } from './../pages/total-graph/total-graph';
import { MonthGraphPage } from './../pages/month-graph/month-graph';
import { BudgetPage } from './../pages/budget/budget';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ActionsCreatorService } from './../store/actions/actionsCreatorService';
import { BudgetTabsPage } from './../pages/budget-tabs/budget-tabs';
import { CreateBudgetPage } from './../pages/create-budget/create-budget';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BudgetListPage } from '../pages/budget-list/budget-list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from '../store/reducers';
import { schema } from '../store/db';


import './app.rxjs-imports';
import { BudgetEffects } from '../store/effects/budget.effects';

@NgModule({
  declarations: [
    MyApp,
    BudgetListPage,
    CreateBudgetPage,
    BudgetTabsPage,
    BudgetPage,
    MonthGraphPage,
    TotalGraphPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([BudgetEffects]),
    DBModule.provideDB(schema),
    NgxChartsModule            
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BudgetListPage,
    CreateBudgetPage,
    BudgetTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ActionsCreatorService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
