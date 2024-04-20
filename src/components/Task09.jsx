import React from 'react';
import { useRecoilValue } from 'recoil';
import { todosAtomFamily } from '../store/atoms/todosfamily';
import { asyncTodosFamily } from '../store/atoms/asyncTodosFamily';

const Todo = ({ id }) => {
  const currentTodo = useRecoilValue(asyncTodosFamily(id));
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <div>{currentTodo.id}</div>
        <div>{currentTodo.title}</div>
        <div>{currentTodo.description}</div>
        <div>{currentTodo.completed ? 'Done' : 'Pending'}</div>
      </div>
    </>
  );
};

const Task09 = () => {
  return (
    <>
      <div>Task09</div>
      <Todo id={1} />
      <Todo id={3} />
    </>
  );
};

export default Task09;
