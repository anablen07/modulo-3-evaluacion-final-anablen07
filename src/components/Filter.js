import React from 'react';

const Filter = (props) =>{

    const updateInputValue=(event) => {
        props.handleInputValue(event.currentTarget.value)
    }

    return(
        <form className="fiter">
        <label htmlFor='name'>search</label>
        <input type="text" id="name" name="name" value={props.value} onChange={updateInputValue}/>
        </form>
    );
};


export default Filter;