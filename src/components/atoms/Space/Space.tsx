import { FC } from "react";
import style from './space.module.css';
import { SpaceProps } from "./types";

const Space: FC<SpaceProps> = ({ children, css, direction }) => {
 return (
  <div className={direction === 'vertical' ? style.vertical : style.horizontal} style={css}>
    { children }
  </div>
 );
};

export {Space};