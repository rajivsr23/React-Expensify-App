 import React from 'react';
 import {removeExpense} from '../actions/expenses.js';
 import {connect} from 'react-redux';
const ExpenseListItem=({description,amount,createdAt,id,dispatch})=>(
<div>
<h3>{description} </h3>
<p>Amount: {amount} </p>
<p>Created At: {createdAt} </p>
<button onClick={ ()=>{

dispatch(removeExpense({id}));

}}>Remove</button>
</div>

);

export default connect()(ExpenseListItem);



