import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

let startEditExpense, startRemoveExpense, history, expense, wrapper;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	expense = expenses[1];
	wrapper = shallow(
		<EditExpensePage 
			startEditExpense={startEditExpense} 
			startRemoveExpense={startRemoveExpense} 
			history={history}
			expense={expense}
		/>
	);
});

test('should render EditExpensePage', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
	const id = expense.id;
	wrapper.find(ExpenseForm).prop('onSubmit')(expense);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startEditExpense).toHaveBeenLastCalledWith(id, expense);
});

test('should handle startRemoveExpense', () => {
	const id = expense.id;
	wrapper.find('button').simulate('click');
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpense).toHaveBeenLastCalledWith(id);
});