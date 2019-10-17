import React from 'react';

import Marked from 'marked';


function TextOutput(props) {

    let makeItUp = (a)=>{
        return {__html: a};
    }


    return(
        <div className="App">
            {/* {
                props.value
            } */}
            <div dangerouslySetInnerHTML={makeItUp(Marked(props.value))} /> 
            
        </div>
    )
}

export default TextOutput;