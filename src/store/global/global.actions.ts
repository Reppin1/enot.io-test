import { SetStateAction } from 'react';

import { ActionsObject, StoreObject } from './global.store.types';

export const provideActions = (
  setStore: (value: SetStateAction<StoreObject>) => void
): ActionsObject => ({
  todos: {
    addNewTodo: (payload) => {
      setStore((store) => ({
        ...store,
        todos: [...store.todos, payload]
      }))
    },
    handleStatus: (payload) => {
      setStore((store) => ({
        ...store,
        todos: store.todos.map((item) => {
          if (item.id === payload) {
            return { ...item, completed: !item.completed }
          }
          return item
        })
      }))
    }
  },
  dialog: {
    setNewsSubscribe: (payload) => {
      setStore((store) => ({
        ...store,
        dialog: {
          ...store.dialog,
          newsSubscribe: payload
        }
      }))
    },
    setOpenDialog: (payload) => {
      setStore((store) => ({
        ...store,
        dialog: {
          ...store.dialog,
          newsSubscribeModal: payload
        }
      }))
    },
    setAddNewTaskDialog: (payload) => {
      setStore((store) => ({
        ...store,
        dialog: {
          ...store.dialog,
          addNewTaskModal: payload
        }
      }))
    }
  },
  ui: {
    setRunningLine: (payload) => {
      setStore((store) => ({
        ...store,
        ui: {
          ...store.ui,
          runningLine: payload
        }
      }))
    },
    setTodayTasks: (payload) => {
      setStore((store) => ({
        ...store,
        ui: {
          ...store.ui,
          todayTasks: payload
        },
      }))
    }
  }
});
