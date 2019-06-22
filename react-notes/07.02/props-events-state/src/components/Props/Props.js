import React from 'react';
import PropsChild from './PropsChild/PropsChild';
import PropsChild2 from './PropsChild2/PropsChild2';

const Props = () => {
    return(
        <>
        <PropsChild favHero="Moon Knight" favIceCream="vanilla" favNumber={13} favArray={[0,1,2,3,4]} favObject={{propertyA: 'batman', propertyB: 'catwoman'}}>
        <ol>
            <li>Nancy Pelosi</li>
            <li>Jeff Sessions</li>
        </ol>
        </PropsChild>
        <PropsChild2 favMovie="GATTACA" favTVShow='Parks and Rec' arrayProp={[1,2,3,4]}/>
        </>
    )
}

export default Props;

/*
Object destructuring 
-lets you pull specific things from an object and assign them variable names

const{food, drink, hobby} = {food: 'hamburger', 
    drink: 'pina colada', 
    hobby: 'climbing', 
    car: 'model 3'
}
console.log(food, drink, hobby);

*/