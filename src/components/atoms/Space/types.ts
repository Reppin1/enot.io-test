import React, { ReactNode } from "react";

type SpaceDirection = 'vertical' | 'horizontal'

export interface SpaceProps {
  direction: SpaceDirection;
  css?: React.CSSProperties;
  children: ReactNode;
}