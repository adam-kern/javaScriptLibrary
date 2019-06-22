import React from 'react';

const PropsChild2 = ({favTVShow, arrayProp}) => {
    return(
        <div>
            <p>{favTVShow}</p>
            <h3>{arrayProp[3]}</h3>
        </div>
    )
}

export default PropsChild2;