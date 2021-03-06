import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null
	};
	onDatesChange = ({startDate, endDate}) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({calendarFocused}));
	};
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};
	onSortByChange = (e) => {
		if (e.target.value === 'amount'){
			this.props.sortByAmount();
		} else if (e.target.value === 'date'){
			this.props.sortByDate();
		}
	};
	render() { 
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input 
							placeholder="Search Expenses"
							type="text" 
							className="text-input"
							value={this.props.filters.text} 
							onChange={this.onTextChange}
						/>
					</div>
					<div className="input-group__item">
						<select 
							className="select"
							onChange={this.onSortByChange}
						>
							<option value="date" >Date</option>
							<option value="amount" >Amount</option>
						</select>
					</div>
					<div className="input-group__item">
						<DateRangePicker
							startDate={this.props.filters.startDate}
							startDateId={"test"}
							endDate={this.props.filters.endDate}
							endDateId={"test2"}
							onDatesChange={this.onDatesChange}
							focusedInput={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							showClearDates={true}
							numberOfMonths={1}
							isOutsideRange={() => false}
						/>
					</div>
				</div>
			</div>
		);
	};
}

const mapStateToProps = (state) => ({
	filters: state.filters,
	expenses: state.expenses,
	expenseCount: state.expenseCount,
	expensesTotal: state.expensesTotal
});

const mapDispatchToProps = (dispatch) => ({
	sortByDate: () => dispatch(sortByDate),
	sortByAmount: () => dispatch(sortByAmount),
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);