import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT'});
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sort by to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
	expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount'
	};
	const action = { type: 'SORT_BY_DATE' };
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const text = 'rent';
	const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text});
	expect(state.text).toBe(text);
});

test('should set startDate', () => {
	const startDate = moment(0);
	const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});
	expect(state.startDate).toEqual(startDate);
});

test('should set end date', () => {
	const endDate = moment(0);
	const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});
	expect(state.endDate).toEqual(endDate);
});