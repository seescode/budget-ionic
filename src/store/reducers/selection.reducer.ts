import { UserSelection } from './../models/interfaces';
import { toPayload } from '@ngrx/effects';
import {
  UPDATE_TRANSACTION, LOAD_BUDGET_DATA_COMPLETE, ADD_TRANSACTION_COMPLETE,
  REMOVE_TRANSACTION_COMPLETE, REMOVE_BUDGET_COMPLETE, SELECT
} from './../actions/actions';

const defaultState = {
  budgetId: null,
  year: null,
  month: null,
  categoryId: null
}

export function SelectionReducer(state: UserSelection = defaultState, action: any) {
  switch (action.type) {
    case SELECT:

      return {
        budgetId: action.payload.budgetId,
        year: action.payload.year,
        month: action.payload.month,
        categoryId: action.payload.categoryId
      };
    default:
      return state;
  }
}


