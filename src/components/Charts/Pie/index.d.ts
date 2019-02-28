import * as React from 'react';
import { number } from 'prop-types';
export interface IPieProps {
  animate?: boolean;
  inner?: number;
  color?: string;
  colors?: string[];
  height: number;
  hasLegend?: boolean;
  padding?: [number, number, number, number];
  percent?: number;
  data?: Array<{
    x: string | string;
    y: number;
  }>;
  total?: React.ReactNode | number | (() => React.ReactNode | number);
  title?: React.ReactNode;
  tooltip?: boolean;
  valueFormat?: (value: string) => string | React.ReactNode;
  subTitle?: React.ReactNode;
  lineWidth?: number;
  margin?: number[];
  style?: any; // TODO
}

export default class Pie extends React.Component<IPieProps, any> {}
