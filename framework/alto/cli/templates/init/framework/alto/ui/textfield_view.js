import React from 'react';

let TextfieldView = ({
                         action,
                         className,
                         placeholder,
                         value = '',
                         isVisible = true
                     }) => {

    return (
        action ?
            <input style={{display: isVisible ? null : 'none'}} onChange={(event) => {
                console.log(event.target.value)
                action(event)
            }} placeholder={placeholder} className={className} value={value}></input>
            :
            <input style={{display: isVisible ? null : 'none'}} placeholder={placeholder} className={className}></input>
    )
};

export default TextfieldView;

