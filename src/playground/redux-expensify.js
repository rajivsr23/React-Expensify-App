
import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

//Action Generators
const addExpense=({description='',
note='',
amount=''
}={})=>({
type: 'Add_Expense',

expense:{
    id: uuid(),
description: description,
note: note,
amount: amount,
createdAt:0
}

});

const removeExpense=({id}={})=>({
type: 'Remove_Expense',
 id

});


const expensesReducerDefault=[];

const expensesReducer=(state=expensesReducerDefault,action)=>{

    switch(action.type){

        case 'Add_Expense':
        return[...state,action.expense]

        case 'Remove_Expense':
        return state.filter(({id}) => id!==action.id);
      
default: return  state

}
};
const filtersReducerDefaultState={
text: '',
sortBy: 'date',
startDate: undefined,
endDate: undefined
};

const filtersReducer=(state=filtersReducerDefaultState,action)=>{

    switch(action.type){
        default: return state
    }
};
//Creating the Store

const store=createStore(combineReducers({
expense: expensesReducer,
filters:filtersReducer
})
);

 

store.subscribe(()=>{
    console.log("State Changed");
console.log(store.getState());

});

const expenseOne=store.dispatch(addExpense({
    description:'rent',
    amount: '100'
}));

store.dispatch(addExpense({
    description:'coffee',
    amount: '200'
}));

store.dispatch(removeExpense({  id:expenseOne.expense.id}));
const demoState={
expenses : [{
id: 123345,
description: 'January Rent',
note: 'This is my final payment for that address',
amount: '87500',
createdAt:0

}],

filters : {
text: 'rent',
sortBy: 'amount',
startDate: undefined,
endDate: undefined

}


};