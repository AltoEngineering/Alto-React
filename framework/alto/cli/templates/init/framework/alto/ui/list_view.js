import React from 'react';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

const ListView = React.forwardRef(({
                                       children,
                                       data,
                                       className,
                                       id = 'id'
                                   }, ref) => {
    if (!data) {
        return (
            <ul className={className} ref={ref}></ul>
        )
    }

    return (
        <ul className={className} ref={ref}>
            {data.map(hash =>
                (React.cloneElement(children, {data: hash, key: hash[id]}))
            )}
        </ul>
    )
});

export default ListView;

