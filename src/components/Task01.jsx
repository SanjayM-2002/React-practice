import React, { useState } from 'react';

const CountBox = ({ count }) => {
  return (
    <>
      <div>{count}</div>
    </>
  );
};

const ButtonBox = ({ count, setCount }) => {
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

const Task01 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>Task01</div>
      <CountBox count={counter} />
      <ButtonBox count={counter} setCount={setCounter} />
    </>
  );
};

export default Task01;
