import React from 'react';
import { NavLink } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => {
	return (
		<div>
			<NavLink 
				activeClassName="is-active" 
				exact={true} 
				to={"/edit/" + id}
			>
			<h3>{description}</h3>
			</NavLink>
			<p>{amount} | {createdAt}</p>
		</div>
)};



export default ExpenseListItem;