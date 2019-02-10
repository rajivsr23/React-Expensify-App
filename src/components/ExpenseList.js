import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
const ExpenseList=(props)=>(
    <div>
    <h1>Expense List</h1>
    <p>Expenses Array Length: {props.expenses.length}</p>
      <p>Filter Text: {props.filters.text}</p>
    </div>
);
    
const mapStateToProps =(state)=>{
return{
expenses: state.expenses,
filters: state.filters

};

};
export default connect(mapStateToProps)(ExpenseList);
