import React from 'react';


function TextOutput(props) {
    return(
        <div className="App">
            {
                props.children
            }
        </div>
    )
}

export default TextOutput;