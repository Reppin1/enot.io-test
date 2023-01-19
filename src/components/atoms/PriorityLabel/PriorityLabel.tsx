import { FC } from "react";
import style from './priorityLabel.module.css';
import { PriorityLabelProps } from "./types";

const PriorityLabel: FC<PriorityLabelProps> = ({ color }) => {
  let colorLabel = {};
  if (color === 'high') {
    colorLabel = { background: 'red' }
  }
  if (color === 'medium') {
    colorLabel = { background: 'yellow' }
  }
  if (color === 'low') {
    colorLabel = { background: '#A9A9A9' }
  }

  return (
    <div className={style.container} style={colorLabel} />
  );
};

export { PriorityLabel };