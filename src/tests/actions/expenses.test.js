import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense',()=>{
const action=removeExpense({id: '123abc'});
expect(action).toEqual({
type: 'REMOVE_EXPENSE',
id: '123abc'

});
});

test('should setup edit expense',()=>{
    const action=editExpense('123abx',{note:'New note'});
    expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abx',
    updates:{
        note: 'New note'
    } 
    
    });
    });

    test('should setup add expense-provided values',()=>{
        
        const expenseData={
            description:'Rent',
            amount: 109500,
            createdAt: 1000,
            note: 'This was last month'
        };
        const action=addExpense(expenseData);
        expect(action).toEqual({
        type: 'Add_EXPENSE',
     
        expense:{
           ...expenseData,
         id: expect.any(String)  
        } 
        
        });
        }); 

        test('should setup add expense-default values',()=>{
            const action=addExpense();
            expect(action).toEqual({
                type: 'Add_EXPENSE',
             
                expense:{
                   
                 id: expect.any(String) ,
                 description: '',
                 note: '',
                 amount: 0,
                 createdAt:0
                } 
                
                });
                }); 
