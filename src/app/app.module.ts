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
import './app.rxjs-imports';

@NgModule({
  declarations: [
    MyApp,
    BudgetListPage,
    CreateBudgetPage,
    BudgetTabsPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
