import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  color: 'white' | 'purple';
}