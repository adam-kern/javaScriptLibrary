import React, {useState} from 'react';
import {StateChild, BerryComponent } from './StateChild';
import {StateButton} from './StateChild';


const State = () => {
    const [text, setText] = useState('');

    return(
        <div>
            <input onChange={(e) => { setText (e.target.value); 
            console.log('setText fired');
            }}
            value={text} placeholder='Parent Input'
            />
            <StateChild stateVar={text} setParentText={setText}/>
            <BerryComponent/>
            <StateButton />
        </div>
    )
}

export default State;