import React, { useState, useEffect } from "react";

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const increment = end > start ? 1 : -1;
    const difference = Math.abs(end - start);
    const stepTime = Math.abs(Math.floor(duration / difference));
    let timer;

    const step = () => {
      setCount((prevCount) => {
        if ((increment > 0 && prevCount + increment <= end) || (increment < 0 && prevCount + increment >= end)) {
          return prevCount + increment;
        }
        clearInterval(timer);
        return prevCount;
      });
    };

    if (start !== end) {
      timer = setInterval(step, stepTime);
    } else {
      setCount(start);
    }

    return () => {
      clearInterval(timer);
    };
  }, [start, end, duration]);

  return <p>{count}</p>;
};

export default Counter;
