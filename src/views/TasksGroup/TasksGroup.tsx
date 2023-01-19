import React, { FC, useState } from "react";
import { TasksLabel } from "./TasksLabel/TasksLabel";
import { TasksList } from "./TasksList/TasksList";
import { TasksGroupProps } from "./types";

const TasksGroup: FC<TasksGroupProps> = ({ items }) => {
  const [visibleTasks, setVisibleTasks] = useState(false);

  function handleVisibleTasks() {
    setVisibleTasks(true);
  }

  function handleCloseTasks() {
    setVisibleTasks(false);
  }

  return (
    <div>
      {visibleTasks ?
        <TasksList name={items[0]} items={items[1]} handleCloseTasks={handleCloseTasks} />
        :
        <TasksLabel name={items[0]} visibleTasks={handleVisibleTasks} />
      }
    </div>
  );
};

export { TasksGroup };