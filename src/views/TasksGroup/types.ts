import { TodoItem } from "../../store/global/global.store.types";

export interface TasksGroupProps {
  items: [string, TodoItem[]]
}