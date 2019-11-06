import React from 'react';

const EditExpensePage = (props) => {
    console.log(prop);
    return(
    <div>
     Editing expense with id of {props.match.params.id}
     
    </div>
    )
};

export default EditExpensePage;
