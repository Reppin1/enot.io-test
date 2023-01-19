import { StoreObject } from './global.store.types';
import { v4 as uuid4 } from 'uuid';

export const initialStore: StoreObject = {
  todos: [
    {
      id: uuid4(),
      date: '01/19/2023',
      name: 'First todo',
      description: 'Some long task description',
      completed: false,
    },
    {
      id: uuid4(),
      date: '01/19/2023',
      name: 'Second todo',
      description: 'some description',
      completed: true,
    },
    {
      id: uuid4(),
      date: '01/19/2023',
      name: 'Third todo',
      description: '',
      completed: true,
    },
    {
      id: uuid4(),
      date: '01/20/2023',
      name: '1',
      description: 'Test',
      completed: false,
    },
    {
      id: uuid4(),
      date: '01/21/2023',
      name: '1',
      description: 'Test',
      completed: false,
    },
  ],
  dialog: {
    newsSubscribe: false,
    newsSubscribeModal: false,
    addNewTaskModal: false,
  },
  ui: {
    runningLine: false,
    todayTasks: false,
  },
};
