import React from 'react';

let ContainerView = ({
                         className,
                         nowShowing
                     }) => {

    return (
        <div className={className}>
            {nowShowing ? React.createElement(nowShowing, {}) :  false}
        </div>
    )
};

export default ContainerView;

