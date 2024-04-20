import React from 'react';
import { useRecoilValue } from 'recoil';
import { todosAtomFamily } from '../store/atoms/todosfamily';

const Todo = ({ id }) => {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <div>{id}</div>
        <div>{currentTodo.title}</div>
        <div>{currentTodo.description}</div>
      </div>
    </>
  );
};

const Task08 = () => {
  return (
    <>
      <div>Task08</div>
      <Todo id={1} />
      <Todo id={3} />
    </>
  );
};

export default Task08;
