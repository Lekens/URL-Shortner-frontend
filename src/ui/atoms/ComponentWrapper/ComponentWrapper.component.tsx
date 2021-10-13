import { useMemo } from 'react';

import cn from 'classnames';

import { IComponentWrapper } from 'ui/atoms/ComponentWrapper/interface';

import styles from './styles.module.scss';

function ComponentWrapper({ children, extraClassName }: IComponentWrapper) {
  const wrapperStyle = useMemo(
    () => cn(styles.children, extraClassName),
    [extraClassName],
  );

  return <div className={wrapperStyle}>{children}</div>;
}
export default ComponentWrapper;
