
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

const editExpense=(id,updates)=>({
type: 'EDIT_EXPENSE',
 id,
updates
});

const setTextFilter =(text ='')=>({
    type: 'SET_TEXT_FILTER',
  text


});

const sortByAmount =()=>({
type: 'SORT_BY_AMOUNT_FILTER',
sortBy: 'amount'

});

const sortByDate=()=>({
    type: 'SORT_BY_DATE_FILTER',
    sortBy: 'date'
});

const setStartDate =(startDate=undefined)=>({
    type: 'SET_START_DATE_FILTER',
    startDate

});

const setEndDate =(endDate=undefined)=>({

    type: 'SET_END_DATE_FILTER',
    endDate
});

const expensesReducerDefault=[];

const expensesReducer=(state=expensesReducerDefault,action)=>{

    switch(action.type){

        case 'Add_Expense':
        return[...state,action.expense]

        case 'Remove_Expense':
        return state.filter(({id}) => id!==action.id);

        case 'EDIT_EXPENSE':
      return state.map((expense)=>{
if(expense.id===action.id){
return{
    ...expense,
...action.updates
};

}else{
    return expense;
};

      });
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
        case 'SET_TEXT_FILTER':
       
            return{
                ...state,
                text:action.text
            };

        case 'SORT_BY_AMOUNT_FILTER':
            return{
                ...state,
                sortBy:action.sortBy
            };
        case 'SORT_BY_DATE_FILTER':
        return {
            ...state,
            sortBy: action.sortBy
        };

        case 'SET_START_DATE_FILTER':
        return {
            ...state,
            startDate: action.startDate
        };
        case 'SET_END_DATE_FILTER':
        return {
            ...state,
            endDate: action.endDate
        };
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

const expenseTwo=store.dispatch(addExpense({
    description:'coffee',
    amount: '200'
}));

store.dispatch(removeExpense({  id:expenseOne.expense.id}));

store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500}));

store.dispatch(setTextFilter('rent'));

store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
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