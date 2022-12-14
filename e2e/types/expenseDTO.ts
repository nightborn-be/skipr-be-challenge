/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Protected API
 * OpenAPI spec version: v1
 */
import type { ExpenseCategory } from './expenseCategory';
import type { ReviewStatus } from './reviewStatus';
import type { RefundStatus } from './refundStatus';

export interface ExpenseDTO {
  id: string;
  /** The creation date of the expense */
  createdAt: string;
  /** The modification date of the expense */
  modifiedAt: string;
  categorization: ExpenseCategory;
  /** The ID of the allocated program */
  programId: string;
  /** The date of the expense */
  expenseAt: string;
  /** The total amount */
  totalAmount: number;
  reviewStatus: ReviewStatus;
  refundStatus: RefundStatus;
}
