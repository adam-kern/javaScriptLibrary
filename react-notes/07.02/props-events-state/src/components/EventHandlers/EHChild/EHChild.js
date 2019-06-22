import React from 'react';


const EHChild = (props) => {
    return(
        <div>
            <button id='childbutton' onClick={props.refProp}>Passed from Parent</button> 
            <button id='childbutton2' onClick={props.refProp2}>Another Button</button> 
        </div>
        )
}


export default EHChild;