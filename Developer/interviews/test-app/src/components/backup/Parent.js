import React, { useState} from 'react';

import Child1 from './Child1';
import Child2 from './Child2';


const Parent = () => {
    const [parentCount, setParentCount] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const onClickCounter = (count) => {
        console.log('onClickCounter.. parent', count);
        setParentCount(count + 1)
        setIsClicked(true);
    }
    
    return (
        <>
         <h1>Parent</h1>
         <p>{ !isClicked ? 0 : parentCount + 2 }</p>
         <Child1 count={!isClicked ? 0 : parentCount + 1}/>
         <Child2 onClickCounter={onClickCounter} />
        </>
    )
};

export default Parent;