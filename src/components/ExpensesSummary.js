import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
	render() {
		return (
			<div>
				<h1>Viewing {this.props.expenseCount} expense(s) totalling {this.props.expensesTotal}</h1>
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	const expenses = selectExpenses(state.expenses, state.filters);
	return {
		expenses,
		expenseCount: expenses.length,
		expensesTotal: selectExpensesTotal(expenses)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);