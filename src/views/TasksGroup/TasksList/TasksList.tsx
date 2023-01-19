import { Space } from "../../../components/atoms/Space/Space";
import style from '../taskGroup.module.css';
import { IconButton } from "@mui/material";
import React, { FC } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TasksListProps } from "./types";
import { TaskItem } from "../TaskItem/TaskItem";

const TasksList: FC<TasksListProps> = ({ handleCloseTasks, items, name }) => {
  return (
    <Space direction="vertical" css={{ margin: '6px 0' }}>
      <Space direction="horizontal" css={{ justifyContent: 'flex-end', marginBottom: '14px' }}>
        <IconButton onClick={handleCloseTasks} size="small">
          <KeyboardArrowUpIcon style={{ fill: 'black', background: 'white', borderRadius: '50%' }} fontSize="inherit" />
        </IconButton>
      </Space>
      <div className={style.container}>
        {items?.map((el) => <TaskItem key={el.id} item={el} />)}
      </div>
    </Space>
  );
};

export { TasksList };