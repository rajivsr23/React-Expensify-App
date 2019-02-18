import moment from 'moment';

//First you start a project and then you create something. If the Items return true, it stays in the Array
//Visible expenses
export default (expenses,{text,sortBy,startDate,endDate})=>{
return expenses.filter((expense)=>{
    const createdAtMoment=moment(expense.createdAt);
    const description=expense.description.toLowerCase();
const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
const startDateMatch=startDate?startDate.isSameOrBefore(createdAtMoment,'day'):true;
const endDateMatch= endDate?endDate.isSameOrBefore(createdAtMoment,'day') : true;

    return textMatch && startDateMatch && endDateMatch;

}).sort((a,b)=>{
    if(sortBy=='date'){
     return  b.createdAt>a.createdAt? 1: -1;
}
    else{
        if(sortBy=='amount'){
return b.amount>a.amount?1:-1;
        }
    }

});
};