import React from 'react';

let FileUploadView = ({
                          action,
                          className,
                          isVisible = true,
                          title
                      }) => {
    let textInput = React.createRef();

    return (
        <form style={{display: isVisible ? 'flex' : 'none'}} className={className} onChange={(ev) => {
            ev.preventDefault();
            let reader = new FileReader();
            let file = textInput.current.files[0];

            if (action) {
                reader.onload = function (e) {
                    action(reader.result)
                };
            }

            reader.readAsDataURL(file);
        }}>
            <div style={{width: '100%', position: 'relative', display: 'flex'}}>
                <div style={{margin: 'auto'}}>{title}</div>
                <input ref={textInput} style={{opacity: 0, position: 'absolute', left: '0em', right: '0em', top: '0em', bottom: '0em'}} type="file" multiple/>
            </div>
        </form>
    )
};

export default FileUploadView;

