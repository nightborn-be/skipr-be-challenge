/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Protected API
 * OpenAPI spec version: v1
 */
import type { ExpenseCategory } from './expenseCategory';

export interface CreateExpenseDTO {
  categorization: ExpenseCategory;
  /** The ID of the allocated program */
  programId: string;
  /** The date of the expense */
  expenseAt: string;
  /** The total amount */
  totalAmount: number;
}
