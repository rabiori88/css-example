import React, { useState } from 'react';

export default function Counter({totalCount, onClickPlus, onClickMinus}) {
  const [count, setCount] = useState(0);
  
  
  return (
    <div className='counter'>
      <span className='number'>{count}</span>
      <button
        className='Plus button'
        onClick={() => {
          setCount((prev) => prev + 1);
          onClickPlus();
        }}
      >
        Add +
      </button>

      <button
        className='Minus button'
        onClick={() => {
          setCount((prev) => prev - 1);
          onClickMinus();
        }}
      >
        Minus -
      </button>
    </div>
  );
}
