import React, { useState, useEffect } from "react";

const Counter = ({ duration }) => {
  const [count, setCount] = useState(0);
  const startCount = 300; // 시작 숫자
  const endCount = 500; // 끝 숫자

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < endCount) {
          return prevCount + 1;
        }
        clearInterval(timer);
        return prevCount;
      });
    }, duration / (endCount - startCount));

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p>{count}</p>;
};

export default Counter;