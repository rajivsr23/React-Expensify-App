 import React from 'react';
export default(props)=>(
<div>
<h3>{props.expenses.description} </h3>
<p>{props.expenses.amount} </p>
<p>{props.expenses.createdAt} </p>
</div>

);


