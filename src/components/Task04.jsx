import React, { useState } from 'react';
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { countAtom } from '../store/atoms/count';
import { evenSelector } from '../store/selectors/evenSelector';

const CountRenderer = () => {
  // In CountRenderer, we just need state value, so we can use useRecoilValue
  const count = useRecoilValue(countAtom);
  return (
    <>
      <div>{count}</div>
    </>
  );
};
const ButtonBox = () => {
  console.log(`buttonbox renders ${Math.random()}`);
  //In ButtonBox, we need just set state, so we can use useSetRecoilState
  /* 
  We could also use useRecoilState, but count value is not used here, we just need setCount here.
  If we use const [count, setCount] = useRecoilState(countAtom), then count state will be updated in this component whenever setCount is called
  which will result in re-render of ButtonBox component
  */
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount((c) => c - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
};

const EvenCountRenderer = () => {
  const isEven = useRecoilValue(evenSelector);

  return (
    <>
      <div>{isEven ? 'It is even' : ''}</div>
    </>
  );
};

const CountBox = () => {
  console.log(`countbox renders ${Math.random()}`);
  return (
    <>
      <CountRenderer />
      <EvenCountRenderer />
      <ButtonBox />
    </>
  );
};

const Task04 = () => {
  // If we use Recoil in any components, we should wrap that component in RecoilRoot
  return (
    <>
      <div>Task04</div>
      <RecoilRoot>
        <CountBox />
      </RecoilRoot>
    </>
  );
};

export default Task04;
