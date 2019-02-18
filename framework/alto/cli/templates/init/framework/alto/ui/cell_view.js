import React from 'react';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2019 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let CellView = ({
                    action,
                    className,
                    children,
                    isVisible = true,
                    key
                }) => {

    return (
        action ?
            <li key={key} style={{display: isVisible ? null : 'none'}} className={className} onClick={(event) => {
                action(event)
            }}>{children}</li>
            :
            <li key={key} style={{display: isVisible ? null : 'none'}} className={className}>{children}</li>
    )
};

export default CellView;

