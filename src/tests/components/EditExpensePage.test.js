import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

let editExpense, startRemoveExpense, history, expense, wrapper;

beforeEach(() => {
	editExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	expense = expenses[1];
	wrapper = shallow(
		<EditExpensePage 
			editExpense={editExpense} 
			startRemoveExpense={startRemoveExpense} 
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
	expect(startRemoveExpense).toHaveBeenLastCalledWith(id);
});

