import React from 'react';

let LabelView = ({
                     className,
                     title,
                     children
                 }) => {

    return (
        <div className={className}>{title} {children}</div>
    )
};

export default LabelView;

