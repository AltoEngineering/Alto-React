import React from 'react';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let ButtonView = ({
                      action,
                      className,
                      title,
                      isVisible = true
                  }) => {

    return (
        action ?
            <button style={{ display: isVisible ? null : 'none' }} onClick={(event) => {event.stopPropagation(); action(event)}} className={className}>{title}</button>
            :
            <button style={{ display: isVisible ? null : 'none' }} className={className}>{title}</button>
    )
};

export default ButtonView;

