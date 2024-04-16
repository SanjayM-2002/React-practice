import React, { useState } from 'react';

/*
Component tree:

Task02 (counter)
|
CountBox
|
CountRenderer, ButtonBox

Here, we are passing counter state as a prop to bottom components: CountRenderer and Buttonbox, which is Prop drilling
Even though CountBox doesnt actually use counter state, since it is defined above CountRenderer component, we are forced to drill it to CountBox also
*/

const CountRenderer = ({ count }) => {
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

const CountBox = ({ count, setCount }) => {
  return (
    <>
      <CountRenderer count={count} />
      <ButtonBox count={count} setCount={setCount} />
    </>
  );
};

const Task02 = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>Task02</div>
      <CountBox count={counter} setCount={setCounter} />
    </>
  );
};

export default Task02;
