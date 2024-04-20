import { atomFamily } from 'recoil';
import { todos } from '../../components/todosList';

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: (id) => {
    return todos.find((x) => x.id === id);
  },
});
