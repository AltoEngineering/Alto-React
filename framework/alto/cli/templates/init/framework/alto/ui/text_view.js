import React from 'react';

let TextView = ({
                    action,
                    className,
                    placeholder,
                    value = ''
                }) => {

    return (
        action ?
            <textarea onChange={(event) => {
                action(event)
            }} placeholder={placeholder} className={className} value={value}></textarea>
            :
            <textarea placeholder={placeholder} className={className}></textarea>
    )
};

export default TextView;

