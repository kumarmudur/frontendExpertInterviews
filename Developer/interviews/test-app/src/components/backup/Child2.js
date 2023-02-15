import React, { useState } from 'react';

const Child2 = ({ onClickCounter }) => {
    const [count, setCount] = useState(0);

    const onClickHandler = () => {
        console.log('onClickHandler...called child2');
        setCount(count + 1);
        onClickCounter(count);
    }

    return (
        <>
        <h1>Child2</h1>
        <p>{count}</p>
        <button type="button" onClick={onClickHandler}>Click</button>
        </>
    )
};

export default Child2;