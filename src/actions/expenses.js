
import uuid from 'uuid'

export const addExpense=({description='',
note='',
amount='',
createdAt=''
}={})=>({
type: 'Add_Expense',

expense:{
    id: uuid(),
description: description,
note: note,
amount: amount,
createdAt:createdAt
}

});

export const removeExpense=({id}={})=>({
type: 'Remove_Expense',
 id

});

export const editExpense=(id,updates)=>({
type: 'EDIT_EXPENSE',
 id,
updates
});