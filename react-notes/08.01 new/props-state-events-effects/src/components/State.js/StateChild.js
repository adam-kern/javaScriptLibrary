import React, {useState} from 'react';

export const StateChild = (props) => {
    const [num, setNum] = useState(.5);
    
    return(
        <div>
            <button onClick={() => setNum(Math.random())}>Change num to rand num</button>
            <p>{num}</p>
            <input placeholder='child input' value={props.stateVar} onChange={(e) => props.setParentText(e.target.value)}/>
        </div>
    )
}

export const BerryComponent = (props) => {
   return(
   <div>
        This is our BerryComponent
    </div>
    )
}


/*Have students configure a button which changes a state variable 
      (a string) when it gets clicked.  The state variable change should replace the
      current state variable value with a new, random value.  This state variable
      value should be displayed in a span tag.*/

export const StateButton = (props) => {
    return(
        <span>
            <br/>
            <button input='child input' value={props.stateVar} onChange={(e) => props.setParentText(e.target.value)}>This is a button</button>
            <br/>
        </span>
    )
}
