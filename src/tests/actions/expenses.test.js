import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test ('should set up remove expense action object', () => {
	const action = removeExpense({id: '123abc'});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should set up edit expense action object', ()=>{
	const updates = {description: '1234', amount:'400'};
	const action = editExpense({id: '12345', updates});
	expect(action).toEqual({
		id: '12345',
		type: 'EDIT_EXPENSE',
		updates: {
			description: '1234',
			amount: '400'
		}
	})
});

test ('should set up add expense action object with provided values', () => {
	const expenseData = {
		description: 'Rent',
		amount: 1050,
		createdAt: 1000,
		note: 'this was an expense'
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test ('should set up add expense action object with provided values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '', 
			amount: 0, 
			createdAt: 0 
		}
	});
});