import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { ContextValue, StoreCreator } from './types';

export const createStore = <StoreObject, ActionsObject>(
  initialStore: StoreObject,
  provideActions: (
    setStore: Dispatch<SetStateAction<StoreObject>>
  ) => ActionsObject
): StoreCreator<StoreObject, ActionsObject> => {
  const defaultContextValue: ContextValue<StoreObject, ActionsObject> = {
    data: initialStore,
    actions: {},
  };

  const StoreContext = createContext(defaultContextValue);
  const useStore = () => useContext(StoreContext);
  return {
    useStore,
    selector: (cb) => () => cb(useStore()),
    Store: ({ children }: { children: ReactNode }) => {
      const [store, setStore] = useState(initialStore);

      return (
        <StoreContext.Provider
          value={{
            data: store,
            actions: provideActions(setStore),
          }}
        >
          {children}
        </StoreContext.Provider>
      );
    },
  };
};
