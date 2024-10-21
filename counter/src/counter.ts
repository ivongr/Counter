import { useState } from "react";

export default function useCount(initialCount = 0) {
  
    const [count,setCount] = useState(initialCount);
    
    const  handleClick = (value:string) => {
    setCount(parseInt(value));

    }
   
    const Increment = () => {
      setCount(count => count += 1)
    };
  
    const Decrease = () => {
      setCount(count => count -= 1)
    }
  
  
    return {
      count,
      Increment,
      Decrease,
      handleClick
    };
}