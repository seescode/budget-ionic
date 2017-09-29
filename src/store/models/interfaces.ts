export interface TotalBudgetInfo {
  totalBudget: number;
  unspent: number;
  spent: number;
}

export interface Transaction {
  name: string;
  categoryName: string;  
  id?: string;
  amount: number;
  timestamp?: Date;
  budgetId?: string;
}

export interface Budget {
  id?: string;
  name: string;
  details: string;
  budgetAmount: number;
  startDate: Date;
  endDate: Date;
}

// export interface ActiveDate {
//   month: number;
//   year: number;
//   fullMonth?: string;
// }

export interface Loaded {
  loadedBudgetInfo: boolean;
  loadedBudgetIds: string[];
}

export interface Selection {
  budgetId: string;
  month: number;
  year: number;
  categoryId: string;
}
