/*
effect challenge:  build a new component.  in this component, create 1 state
  variable.  this variable should be 2-way bound to an input field (as the 
  input from the user changes, this first variable's text updates).  your component
  should also have an effect.  it should have a dependency list of one item--your
  state variable.  when your text length is a multiple of 5, your effect should create
  a new setinterval function and return a cleanup function to get rid of this interval.
  make the interval function say whatever you want, and it should run every 2 seconds.
*/

//MY ATTEMPT
// import React, {useState} from 'react'


// const component = () => {
//         const [text, setText] = useState('');

//         const effect = () => {
//             text.length%5
//             return 
//         }

//         return(
//             <div>
//                 <input onChange={(e) => { setText (e.target.value)}}/>
//            </div>
//         )}

import React, { useState, useEffect } from 'react';

const EffectsChallenge = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        if (text.length % 5 === 0) {
            var interval = setInterval(() => console.log('bananas in pajamas'), 1000)
        }

        return () => clearInterval(interval);
    }, [text])

    return (
        <input placeholder='we want two way binding' value={text} onChange={(e) => setText(e.target.value)} />
    )
}

export default EffectsChallenge



