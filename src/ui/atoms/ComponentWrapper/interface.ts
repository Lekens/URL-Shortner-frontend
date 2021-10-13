import { ReactNode } from 'react';

export interface IComponentWrapper {
  children: ReactNode;
  extraClassName?: string;
}
