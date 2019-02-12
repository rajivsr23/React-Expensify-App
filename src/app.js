import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense,editExpense,removeExpense} from './actions/expenses';
import {setTextFilter,setStartDate,setEndDate,sortByAmount} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store=configureStore();
store.dispatch(addExpense ({
    description: 'Water bill',
    amount: 3300
}));

store.dispatch(addExpense ({
    description: 'Gas bill'
}));

store.dispatch(setTextFilter ('bill'));

setTimeout(()=>{
store.dispatch(setTextFilter ('water'));

},2000);

const state =store.getState();
const visibleExpenses =getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

const jsx=(
<Provider store={store}>
<AppRouter />
</Provider>
    
);
ReactDOM.render(jsx, document.getElementById('app'));

