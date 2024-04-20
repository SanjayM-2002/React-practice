import { atomFamily, selectorFamily } from 'recoil';

export const asyncTodosFamily = atomFamily({
  key: 'asyncTodosFamily',
  default: selectorFamily({
    key: 'asyncTodosSelectorFamily',
    get:
      (id) =>
      async ({ get }) => {
        const res = await fetch(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        const data = await res.json();
        console.log('data of todo is: ', data);
        const todo = data.todo;
        return todo;
      },
  }),
});
