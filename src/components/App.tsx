import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './App.module.scss'

const App = () => {

  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

    return (
        <div>
          <h1 className={classes.value}>Webpack</h1>
          <button className={classes.btn} onClick={increment}>inc</button>
         <h1>{count}</h1>
         <Outlet />
        </div>
    );
};

export default App
