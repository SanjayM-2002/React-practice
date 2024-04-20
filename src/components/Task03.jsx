import React, { useState } from 'react';
import { useContext } from 'react';
import { CounterContext } from '../context/context01';

const CountRenderer = () => {
  const count = useContext(CounterContext);
  return (
    <>
      <div>{count}</div>
    </>
  );
};
const ButtonBox = ({ setCount }) => {
  const count = useContext(CounterContext);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
};

const CountBox = ({ setCount }) => {
  console.log(`countbox renders ${Math.random()}`);
  return (
    <>
      <CountRenderer />
      <ButtonBox setCount={setCount} />
    </>
  );
};

const Task03 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>Task03</div>
      <CounterContext.Provider value={counter}>
        <CountBox setCount={setCounter} />
      </CounterContext.Provider>
    </>
  );
};

export default Task03;
