// import { AddTransportationPage } from './add-transportation';
// import { AddUtilitiesPage } from './add-utilities';
// import { AddStuffPage } from './add-stuff';
// import { AddMedicalPage } from './add-medical';
// import { AddHomePage } from './add-home';
// import { AddFunPage } from './add-fun';
// import { AddFoodPage } from './add-food';
// import { AddEducationPage } from './add-education';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTransactionPage } from './add-transaction';

@NgModule({
  declarations: [
    // AddEducationPage,
    // AddFoodPage,
    // AddFunPage,
    // AddHomePage,
    // AddMedicalPage,
    // AddStuffPage,
    // AddTransportationPage,
    // AddUtilitiesPage,
    AddTransactionPage    
  ],
  imports: [
    // IonicPageModule.forChild(AddEducationPage),
    // IonicPageModule.forChild(AddFoodPage),
    // IonicPageModule.forChild(AddFunPage),
    // IonicPageModule.forChild(AddHomePage),
    // IonicPageModule.forChild(AddMedicalPage),
    // IonicPageModule.forChild(AddStuffPage),
    // IonicPageModule.forChild(AddTransportationPage),
    // IonicPageModule.forChild(AddUtilitiesPage),
    IonicPageModule.forChild(AddTransactionPage),
  ],
  exports: [
    // AddEducationPage,
    // AddFoodPage,
    // AddFunPage,
    // AddHomePage,
    // AddMedicalPage,
    // AddStuffPage,
    // AddTransportationPage,
    // AddUtilitiesPage,
    AddTransactionPage    
  ]
})
export class AddTransactionModule {}
