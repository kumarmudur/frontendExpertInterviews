import React, { useState } from 'react';

import Component2 from './Component1';

const Component1 = () => {
  const [count, setCount] = useState(0);
  
  const onClickCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <Component2 count={count} />
        <button onClick={onClickCounter}>Click</button>
    </div>
  )
}

export default Component1;