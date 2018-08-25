import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
	state = {
		expenseCount: this.props.expenses.length,
		expensesTotal: selectExpensesTotal(this.props.expenses)
	}
	render() {
		return (
			<div>
				<h1>Viewing {this.state.expenseCount} expense(s) totalling {this.state.expensesTotal}</h1>
			</div>
		);
	};
};

const mapStateToProps = (state) => ({
	expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);