import { createStore } from '../createStore';

import { initialStore } from './global.initialStore';
import { provideActions } from './global.actions';
import { ActionsObject } from './global.store.types';

export type { ActionsObject } from './global.store.types';

const { Store, useStore, selector } = createStore(initialStore, provideActions);

export const useGlobalStore = useStore;

export const useTodos = selector(({ data: { todos }, actions }) => ({
  data: todos,
  actions: (actions as ActionsObject).todos,
}));
export const useNewsSubscribe = selector(
  ({ data: { dialog }, actions }) => ({
    data: dialog,
    actions: (actions as ActionsObject).dialog,
  })
);
export const useUi = selector(({ data: { ui }, actions }) => ({
  data: ui,
  actions: (actions as ActionsObject).ui
}))

export const GlobalStore = Store;
