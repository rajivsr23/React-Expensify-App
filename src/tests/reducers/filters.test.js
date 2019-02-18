import filtersReducer from '../../reducers/filters';
import filters from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values',()=>{
const state=filtersReducer(undefined,{type: '@@INIT'});
expect(state).toEqual({
text: '',
sortBy: 'date',
startDate: moment().startof('month'),
endDate: moment().endtof('month'),
});

});

test('should sort by amount',()=>{
    const state=filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
    });

    
test('should sort by date',()=>{
    const currentState={
        text: '',
sortBy: 'date',
startDate:undefined,
endDate: undefined,
    };
    const action ={type: 'SORT_By_DATE'};
    const state=filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
    });


    //

    test('should set up text filter',()=>{
        
     const text='This is my filter';
        const action={

            type: 'SET_TEXT_FILTER',
            text
        }
        const state=filtersReducer(undefined,{type: 'SORT_BY_AMOUNT'});
        expect(state.text).toBe(text);
        });

        test('should set up startDate filter',()=>{
            
        const startDate=moment();
        const action={
            type: 'SET_START_DATE',
            startDate
        };
        const state=filtersReducer(undefined,action);
        expect(state.startDate).toBe(startDate); 
        
        });

            test('should set up endDate filter',()=>{
                const endDate=moment();
        const action={
            type: 'SET_END_DATE',
            startDate
        };
        const state=filtersReducer(undefined,action);
        expect(state.endDate).toBe(endDate); 
                });
    