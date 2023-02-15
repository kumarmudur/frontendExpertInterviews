// Zopsmart

import React, { useState } from 'react';

import './style.css';

const data = [
    'https://storage.googleapis.com/zopsmart-uploads/originals/20210831/2-20210831-170123.jpg',
    'https://images.unsplash.com/photo-1653216977228-4efa7b40623c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270',
    'https://storage.googleapis.com/zopsmart-uploads/originals/20211004/8-20211004-075110.jpg',
    'https://storage.googleapis.com/zopsmart-uploads/originals/20210831/2-20210831-170123.jpg'
]

const ImageComponent = ({ imageSrc }) => {
    return (
       <img width="100%" height="200" src={imageSrc} />
    )
}

const Caresol = () => {
    const [image, setImage] = useState(data[1]);
    const [count, setCount] = useState(0);
    const onClickLeft = () => {
        setCount(count - 1);
        setImage(data[count]);
    };

    const onClickRight = () => {
        setCount(count + 1);
        setImage(data[count]);
    }

    return (
        <div className="container">
           <button className="buttonLeft" type="button" onClick={onClickLeft}>Left</button>
            <ImageComponent imageSrc={image} />
           <button className="buttonRight" type="button" onClick={onClickRight}>Right</button>
        </div>
    )

}

export default Caresol;