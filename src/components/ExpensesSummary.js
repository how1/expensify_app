import React from 'react';
import { Link } from 'react-router-dom';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
	render() {
		const formattedExpensesTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00');
		const formattedHiddenExpensesTotal = numeral(this.props.hiddenExpensesTotal / 100).format('$0,0.00');
		const formattedAllExpensesTotal = numeral(this.props.allExpensesTotal / 100).format('$0,0.00');
		return (
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Viewing <span>{this.props.expenseCount}</span> expense(s) totalling <span>{formattedExpensesTotal}</span></h1>
					<h3 className="page-header__title">Hiding <span>{this.props.hiddenExpenseCount}</span> expense(s) totalling <span>{formattedHiddenExpensesTotal}</span></h3>
					<h3 className="page-header__title">All <span>{this.props.allExpensesCount}</span> expense(s) total <span>{formattedAllExpensesTotal}</span></h3>
					<div className="page-header__actions">
						<Link className="button" to="/create">Add Expense</Link>
					</div>
				</div>
			</div>
		);
	};
};

const mapStateToProps = (state) => {
	const allExpensesTotal = selectExpensesTotal(state.expenses);
	const allExpensesCount = state.expenses.length;
	const expenses = selectExpenses(state.expenses, state.filters);
	const hiddenExpenses = state.expenses.filter(expense => !expenses.includes(expense));
	console.log(state.expenses);
	console.log(expenses);
	console.log(hiddenExpenses);
	return {
		expenses,
		expenseCount: expenses.length,
		expensesTotal: selectExpensesTotal(expenses),
		hiddenExpenseCount: hiddenExpenses.length,
		hiddenExpensesTotal: selectExpensesTotal(hiddenExpenses),
		allExpensesCount: state.expenses.length,
		allExpensesTotal: selectExpensesTotal(state.expenses)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);