import { useState } from 'react';

export default function useCount(initialCount = 0) {
  
    const [count,setCount] = useState(initialCount);
    
    const  handleClick = (value:number) => {
    setCount(value);
    }
   
    const increment = () => {
      setCount(count => count += 1)
    };
  
    const decrease = () => {
      setCount(count => count -= 1)
    }
  
  
    return {
      count,
      increment,
      decrease,
      handleClick
    };
}