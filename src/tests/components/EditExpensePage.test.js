import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, expense, wrapper;

beforeEach(() => {
	editExpense = jest.fn();
	removeExpense = jest.fn();
	history = { push: jest.fn() };
	expense = expenses[1];
	wrapper = shallow(
		<EditExpensePage 
			editExpense={editExpense} 
			removeExpense={removeExpense} 
			history={history}
			expense={expense}
		/>
	);
});

test('should render EditExpensePage', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
	const id = expense.id;
	wrapper.find(ExpenseForm).prop('onSubmit')(expense);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(editExpense).toHaveBeenLastCalledWith({id, updates: expense});
});

test('should handle removeExpense', () => {
	const id = expense.id;
	wrapper.find('button').simulate('click');
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(removeExpense).toHaveBeenLastCalledWith({id});
});

