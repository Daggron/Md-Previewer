import React from 'react'


function  Textinput(props) {


    return(
        <div className="type-box">
            <textarea  onChange={props.onChange} name="input" rows="10" cols="40">

            </textarea>
            
        </div>
    )
}

export default Textinput;