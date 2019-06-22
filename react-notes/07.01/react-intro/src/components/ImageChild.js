import React from 'react';

function ImageChild(){
function createImage(){
    return (
        <img src="https://www.shrinktank.com/wp-content/uploads/2018/10/movie-star-wars-59190-ddd603.jpg" alt="Darth Vader"></img>
    )
}

    return(
        <div>
            <img src="https://vafloc02.s3.amazonaws.com/isyn/images/f175/img-2009175-f.jpg" alt="Leia"></img>
            {createImage()}
        </div>
    )
}

export default ImageChild;