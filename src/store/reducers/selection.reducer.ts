import { toPayload } from '@ngrx/effects';
import {
  UPDATE_TRANSACTION, LOAD_BUDGET_DATA_COMPLETE, ADD_TRANSACTION_COMPLETE,
  REMOVE_TRANSACTION_COMPLETE, REMOVE_BUDGET_COMPLETE, SELECT
} from './../actions/actions';
import { Transaction } from './../models/interfaces';

export function SelectionReducer(state: Transaction[] = [], action: any) {
  switch (action.type) {
    case SELECT:
      return {
        budgetId: action.budgetId,
        year: action.year,
        month: action.month,
        categoryId: action.categoryId
      };
    default:
      return state;
  }
}


