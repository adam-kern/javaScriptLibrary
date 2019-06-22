import React from 'react';

const EventHandlers = () => {

    const setDocumentTitle = () => {
        document.title = Math.floor(Math.random()*100);
    }

    return (
        <img src="https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/7/8/78adcafa2789c1170e658b69fd5c334d0672ae08_wtf1100_1.jpg" onMouseOver={() => console.log('we moused over')} onMouseLeave={setDocumentTitle} height="250px" width="250px" alt="american football" />
    )
}

export default EventHandlers;