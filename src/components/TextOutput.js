import React from 'react';

import Marked from 'marked';

const fs =  require('fs'); 

function TextOutput(props) {

    let makeItUp = (a)=>{
        return {__html: a};
    }

    
    return(
        <div className="output">
           

            <div  dangerouslySetInnerHTML={makeItUp(Marked(props.value))} /> 
            
        </div>
    )
}

export default TextOutput;