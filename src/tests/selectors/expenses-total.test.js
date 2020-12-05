import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const sum = selectExpensesTotal([]);
  expect(sum).toBe(0);
});

test('should correctly add up a single expense', () => {
  const expense = expenses[0];
  const sum = selectExpensesTotal([expense]);
  expect(sum).toBe(expense.amount);
});

test('should correctly add up multiple expenses', () => {
  const sum = selectExpensesTotal(expenses);
  expect(sum).toBe(150400);
});