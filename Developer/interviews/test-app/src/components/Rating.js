// Perfios 

import React, { useState} from "react";

import './style.css';

const Rating = () => {

    const [divStyle, setDivStyle] = useState({ backgroundColor: 'white' }) 

    const onClickDiv = () => {
        console.log('onClickDiv clciked');
        setDivStyle({ backgroundColor: 'blue' });
    }

    return (
        <div className="ratingContainer">
            <div className="circle" style={divStyle} onClick={onClickDiv}>1</div>
            <div className="circle">1</div>
            <div className="circle">1</div>
            <div className="circle">1</div>
            <div className="circle">1</div>
        </div>
    )
}

export default Rating;