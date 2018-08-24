import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters'; 
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters 
			filters={filters}
			setTextFilter={setTextFilter}
			sortByAmount={sortByAmount}
			sortByDate= {sortByDate}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
		/>);
});

test('should render ExpenseListFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt filters correctly', () => {
	wrapper.setProps({
		filters:{altFilters}
	})
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
	wrapper.find('input').simulate('change',{
		target: { 
			value:'rent'
		}
	});
	expect(setTextFilter).toHaveBeenLastCalledWith('rent');
});

test('should sort by date', () => {
	wrapper.find('select').simulate('change',{
		target: { 
			value:'date'
		}
	});
	expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
	wrapper.find('select').simulate('change', {
		target: { 
			value:'amount'
		}
	});
	expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
	wrapper.find(DateRangePicker).prop('onDatesChange')({
		startDate: filters.startDate,
		endDate: filters.endDate
	});
	expect(setStartDate).toHaveBeenLastCalledWith(filters.startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(filters.endDate);
});

test('should handle date changes with alt data', () => {
	wrapper.find(DateRangePicker).prop('onDatesChange')({
		startDate: altFilters.startDate,
		endDate: altFilters.endDate
	});
	expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focus changes', () => {
	const calendarFocused = 'endDate';
	wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
	expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});


