import {createStore} from 'redux';

//Action generators
const incrementCount=({incrementBy=1}={})=>({
    type: 'INCREMENT',
    incrementBy

});


const decrementCount=({decrementBy=1}={})=>({
    type: 'DECREMENT',
    decrementBy
    
});

const setCount=({count}={})=>({
    type: 'SET',
    count

});

const resetCount=({count}={})=>({
    type: 'RESET',
    

});

const countReducer =(state={count: 0},action)=>{
 
  
    switch(action.type){
      case 'INCREMENT': 
      console.log("Increment");
      return{

        count: state.count+action.incrementBy
      };
    case 'DECREMENT':
    console.log("Decrement");
    return{
        count: state.count-action.decrementBy
    };
    case 'SET':
    return {
        count: action.count
    };
    case 'RESET':
    console.log("Reset");
    return {
        count: 0
    };
    default: return state;
    }
};

const store =createStore(countReducer);

const unsubscribe=store.subscribe(()=>{
    
console.log(store.getState());

});

store.dispatch(incrementCount(
    {incrementBy: 4}
));
store.dispatch(incrementCount({incrementBy:5}));

store.dispatch({type: 'RESET'});
store.dispatch(decrementCount({
    decrementBy: 1
}));
store.dispatch(decrementCount({
    decrementBy: 10
}));

store.dispatch(setCount({
    count: 101
}))

store.dispatch(resetCount());


