import { useState } from "react";
export function useCounter(initialValue = 10) {
  const [state, setState] = useState({
    counter: initialValue,
 
  });

  const { counter } = state;
  const add = () => {
    setState({
      counter: counter + 1,
  
    });
  };

  const minus = () => {
    setState({
      counter: counter - 1,
    
    });
  };

  const reset = () => {
    setState({
      counter: initialValue,
    
    });
  };

  return {
    state,
    handlers: { add, minus, reset },
  };
}
