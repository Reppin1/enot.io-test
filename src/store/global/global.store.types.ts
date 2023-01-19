export interface TodoItem {
  id: string;
  date: string;
  name: string;
  completed: boolean;
  description: string;
}

interface IDialog {
  newsSubscribe: boolean;
  newsSubscribeModal: boolean;
  addNewTaskModal: boolean;
}

interface IUiInterface {
  runningLine: boolean;
  todayTasks: boolean;
}

export interface StoreObject {
  todos: TodoItem[];
  dialog: IDialog;
  ui: IUiInterface;
}

interface DialogActions {
  setNewsSubscribe: (args: boolean) => void;
  setOpenDialog: (args: boolean) => void;
  setAddNewTaskDialog: (args: boolean) => void;
}

interface UiActions {
  setRunningLine: (args: boolean) => void;
  setTodayTasks: (args: boolean) => void;
}

interface TodosAction {
  addNewTodo: (args: any) => void;
  handleStatus: (args: string) => void;
}

export interface ActionsObject {
  todos: TodosAction;
  dialog: DialogActions;
  ui: UiActions
}