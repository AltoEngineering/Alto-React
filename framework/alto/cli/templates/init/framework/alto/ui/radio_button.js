import React from 'react';

let RadioButton = ({
                       action,
                       id,
                       name,
                       className,
                       title,
                       isSelected
                   }) => {

    return (
        action ?
            <div className={className}>
                <input onChange={(event) => {action(event)}}  type="radio" id={id} name={name} checked={isSelected}/>
                <label htmlFor={id}>{title}</label>
            </div>
            :
            <div className={className} >
                <input type="radio" id={id} name={name} checked={isSelected}/>
                <label htmlFor={id}>{title}</label>
            </div>
    )
};

export default RadioButton;

