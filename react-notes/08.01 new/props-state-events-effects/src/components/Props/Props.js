import React from 'react';

const Props = (props) => {
    return (
        <div>
            <h1>{props.str}</h1>
            <h2>{props.luckyNum}</h2>
            <ol>
                <li>{props.arr[0]}</li>
                <li>{props.arr[1]}</li>
                <li>{props.arr[2]}</li>
            </ol>
        </div>
    )
} 

export default Props;