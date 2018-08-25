import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should handle summary for 0 expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenses={[]}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should handle summary for 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]}/>);
	expect(wrapper).toMatchSnapshot();
});

test('should handle summary for multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
	expect(wrapper).toMatchSnapshot();
});