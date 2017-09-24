import { YearGraphPage } from './../pages/year-graph/year-graph';
import { MonthGraphPage } from './../pages/month-graph/month-graph';
import { BudgetTabsPage } from './../pages/budget-tabs/budget-tabs';
import { CreateBudgetPage } from './../pages/create-budget/create-budget';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BudgetPage } from '../pages/budget/budget';
import { BudgetListPage } from '../pages/budget-list/budget-list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BudgetListPage,
    BudgetPage,
    CreateBudgetPage,
    BudgetTabsPage,
    MonthGraphPage,
    YearGraphPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BudgetListPage,
    BudgetPage,
    CreateBudgetPage,
    BudgetTabsPage,
    MonthGraphPage,
    YearGraphPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
