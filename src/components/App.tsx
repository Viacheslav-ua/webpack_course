import React, { useState } from 'react';

const App = () => {

  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

    return (
        <div>
          <button onClick={increment}>inc</button>
         <h1>{count}</h1>
        </div>
    );
};

export default App
