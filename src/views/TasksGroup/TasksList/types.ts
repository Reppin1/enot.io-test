import { TodoItem } from "../../../store/global/global.store.types";

export interface TasksListProps {
  handleCloseTasks: () => void;
  items: TodoItem[];
  name: string;
}