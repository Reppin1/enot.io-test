import { Space } from "../../../components/atoms/Space/Space";
import { PriorityLabel } from "../../../components/atoms/PriorityLabel/PriorityLabel";
import style from "../taskGroup.module.css";
import React, { FC } from "react";
import { Switch } from "../../../components/atoms/Switch/Switch";
import { ActionsObject, useTodos } from "../../../store/global/global.store";
import { TaskItemProps } from "./types";

const TaskItem: FC<TaskItemProps> = ({ item }) => {
  const { actions: ActionTodo } = useTodos()
  const { handleStatus } = ActionTodo as ActionsObject['todos']
  return (
    <Space
      direction="horizontal"
      css={{
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginBottom: '6px'
      }}>
      <Space direction="horizontal" css={{ alignItems: 'center', minWidth: 0, width: '100%' }}>
        <PriorityLabel color="high" />
        <div className={style.nameGroup}>
          <span
            className={style.taskName}
            style={{ textDecoration: item.completed ? 'line-through' : '', }}
          >
            {item?.name}
          </span>
          <span className={style.description}>{item?.description}</span>
        </div>
      </Space>
      <div>
        <Switch onClick={() => handleStatus(item.id)} checked={item?.completed} />
      </div>
    </Space>
  );
};

export { TaskItem };