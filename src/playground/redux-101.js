import {createStore} from 'redux';

const store =createStore((state={count: 0},action)=>{
    
    switch(action.type){
      case 'INCREMENT': 
      console.log("Increment");
      return{

        count: state.count+1
      };
    case 'DECREMENT':
    console.log("Decrement");
    return{
        count: state.count-1
    };
    case 'RESET':
    console.log("Reset");
    return {
        count: 0
    };
    default: return state;
    }
});

console.log(store.getState());

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'RESET'});
store.dispatch({type: 'DECREMENT'});

console.log(store.getState());
