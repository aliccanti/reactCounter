import React, { useState } from 'react';
import './styles.css';


const App = () => {

  const [count, setCount] = useState(0);

  return (
    <>
    <div class="counter-container">

      <p class="counter">{count}</p>

    </div>

    <div class="buttons-container">
        <button class="btn-less" onClick={() => count > 0 ? setCount(count - 1) : setCount(0) }>-</button>
        <button class="btn-reset" onClick={() => setCount(0)}>reset</button>
        <button class="btn-more" onClick={() => setCount(count + 1)} >+</button>
    </div>
    </>
  )

};

export default App;
