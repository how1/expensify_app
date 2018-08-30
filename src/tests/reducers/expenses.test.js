import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
	const expense = {
		id: expect.any(String),
		description: 'rent',
		note: '',
		amount: 100
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
})

test('should edit an expense', () => {
	const id = expenses[0].id;
	const updates = {
		id,
		description: 'Gum2',
		note: '',
		amount: 100,
		createdAt: 0
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id,
		updates
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([updates, expenses[1], expenses[2]]);
});

test('should not edit an expense if id not found', () => {
	const id = '-1';
		const updates = {
			id,
			description: 'Gum2',
			note: '',
			amount: 100,
			createdAt: 0
		};
		const action = {
			type: 'EDIT_EXPENSE',
			id,
			updates
		}
		const state = expensesReducer(expenses, action);
		expect(state).toEqual(expenses);
});

test('should set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [expenses[1]]
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
});