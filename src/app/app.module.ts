import { AddTransactionPage } from './../pages/add-transaction/add-transaction';
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
    AddTransactionPage
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
    AddTransactionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
