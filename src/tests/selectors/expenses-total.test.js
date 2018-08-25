import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
	const result = selectExpensesTotal([]);
	expect(result).toEqual(0);
});

test('should add up a single expense', () => {
	const result = selectExpensesTotal([expenses[0]]);
	expect(result).toEqual(195);
});

test('should add up multiple expenses', () => {
	const result = selectExpensesTotal(expenses);
	expect(result).toEqual(114195);
});