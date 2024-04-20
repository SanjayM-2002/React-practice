import React from 'react';
import { useRecoilStateLoadable, useRecoilValue } from 'recoil';
import { todosAtomFamily } from '../store/atoms/todosfamily';
import { asyncTodosFamily } from '../store/atoms/asyncTodosFamily';

const Todo = ({ id }) => {
  const currentTodo = {};
  const [todo, setTodo] = useRecoilStateLoadable(asyncTodosFamily(id));
  console.log(todo, Math.random());
  if (todo.state === 'loading') return <div>Loading ......</div>;
  else if (todo.state === 'hasValue') {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <div>{todo.contents.id}</div>
          <div>{todo.contents.title}</div>
          <div>{todo.contents.description}</div>
          <div>{todo.contents.completed ? 'Done' : 'Pending'}</div>
        </div>
      </>
    );
  } else {
    return <div>Error in fetching data</div>;
  }
};

const Task10 = () => {
  return (
    <>
      <div>Task10</div>
      <Todo id={1} />
      <Todo id={3} />
    </>
  );
};

export default Task10;
