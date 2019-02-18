import {setStartDate, setEndDate,sortByAmount, setTextFilter,sortByDate} from '../../actions/filters';
import moment from 'moment';
test('should generate set Start Date',()=>{
const action = setStartDate(moment(0));
expect(action).toEqual({
type: 'SET_START_DATE',
startDate: moment(0)

});
});

test('should generate set End Date',()=>{

    const action = setEndDate(moment(0));
    expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
    
    });
    });

    test('should generate Amount',()=>{

        const action = sortByAmount();
        expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
       
        });
        });

        test('should sort By Date',()=>{

            const action = sortByDate();
            expect(action).toEqual({
            type: 'SORT_BY_DATE'
            
            });
            });


            test('should sort by Text-Provided Values',()=>{

                const action = setTextFilter('Ricky');
                expect(action).toEqual({
                type: 'SET_TEXT',
                text: 'Ricky'
                });
                });

                test('should sort by Text-Default Values',()=>{

                    const action = setTextFilter();
                    expect(action).toEqual({
                    type: 'SET_TEXT',
                   text: ''
                    });
                    });
