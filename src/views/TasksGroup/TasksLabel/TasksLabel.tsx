import style from "../taskGroup.module.css";
import { Space } from "../../../components/atoms/Space/Space";
import { PriorityLabel } from "../../../components/atoms/PriorityLabel/PriorityLabel";
import { IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { FC } from "react";
import { TasksLabelProps } from "./types";
import { formatName } from "../../../utils/formatName";

const TasksLabel: FC<TasksLabelProps> = ({ visibleTasks, name }) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Space direction="horizontal" css={{ width: '100%' }}>
          <PriorityLabel color="low" />
          <div className={style.nameGroup}>
            <Typography color="white" variant="h4">{formatName(name)} Tasks</Typography>
          </div>
        </Space>
        <IconButton onClick={visibleTasks} size="small">
          <KeyboardArrowDownIcon
            style={{ fill: 'black', background: 'white', borderRadius: '50%' }}
            fontSize="inherit"
          />
        </IconButton>
      </div>
    </div>
  );
};

export { TasksLabel };