import React from 'react';
import { useEffect } from 'react/cjs/react.production.min';

const Child1 = ({ count }) => {
    console.log('count..', count);

    

    useEffect(() => {
    
    return {

    }
    }, []);
    
    // return (
    //     <>
    //     <h1>Child1 component</h1>
    //     <p>{count}</p>
    //     </>
    // )
};

export default Child1;