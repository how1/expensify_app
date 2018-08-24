import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should genereate start date action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should genereate start date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	})
});

test('should generate text filter action object', () => {
	const action = setTextFilter('rent');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'rent'
	})
});

test('should generate default text filter action object', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	})
});

test('should generate sort by amount action object', () => {
	expect(sortByAmount()).toEqual({
		type: 'SORT_BY_AMOUNT'
	})
});

test('should generate sort by date action object', () => {
	expect(sortByDate()).toEqual({
		type: 'SORT_BY_DATE'
	})
});