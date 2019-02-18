import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('ExpenseForm',()=>{
const wrapper =shallow(<Expense/>);
expect(
    wrapper
).toMatchSnapshot();

});

test('should render error-invalid',()=>{
const wrapper=shallow(<ExpenseForm/>);
wrapper.find('form').simulate('submit');
});
test('ExpenseForm with expense data',()=>{
    const wrapper =shallow(<ExpenseForm expense={expenses[1]/>);
    expect(wrapper).toMatchSnapshot();
    
});