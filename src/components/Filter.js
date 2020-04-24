import React from 'react';

const Filter = (props) =>{

    const updateInputValue=(event) => {
        event.preventDefault();
        props.handleInputValue(event.currentTarget.value)
    }

    return(
        <form className="filter">
        <label htmlFor='name'></label>
        <input type="text" class="name" id="name" name="name" value={props.inputValue} onChange={updateInputValue}/>
        </form>
    );
};


export default Filter;