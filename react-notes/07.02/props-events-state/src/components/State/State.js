import React, {useState} from 'react';


const State = () => {
    const [clicks, setClicks] = useState(0)
    const [inputStr, setInputStr] = useState('I do not know');

    return(
        <>
            <p>{clicks}</p>
            <button onClick={() => setClicks(clicks +1)}>Add 1 Click</button>
            <input value={inputStr} onChange={(e) => setInputStr(e.target.value)} placeholder='filler text'/>
        </>
    )
}

export default State;

/*
Array Destructuring
const [first, second] = ['zach is amazing', 'brie is awesome', 'gold fish are okay']
console.log(first, second);
*/