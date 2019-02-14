import React from 'react';

export default class ExpenseForm extends React.Component{

    state=
    {

        description: ''
    };
    render(){

        return(

    <div> 
    <form>
    <input 
    type="text"
    placeholder="description"
    autoFocus
    ></input><br/>
    <input
    type="number"
    placeholder="Amount"
    />
    <textarea
    placeholder="Add a note for your expense (optional)"
    >
    
    </textarea><br/>
    <button>Add Expense</button>
    </form>
    </div>
        )
    }
}




