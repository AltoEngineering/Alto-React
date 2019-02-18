import React from 'react';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

/*
    Example:
          <ImageView src={null} sources={ [{constraint: "min-width: 768px", srcset: null }] }></ImageView>
 */

const ImageView = ({
                       alt,
                       className,
                       src,
                       sources = []
                   }) => {

    let sourcesMapped = sources.map((source, idx) => {
        return React.createElement('source', { key:{idx}, media:`(${source.constraint})`, srcSet: source.srcset });
    });

    return (
        <picture className={className}>
            {sourcesMapped}
            <img src={src} alt={alt}/>
        </picture>
    )

};

export default ImageView;