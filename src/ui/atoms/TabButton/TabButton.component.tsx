import { useMemo } from 'react';

import cn from 'classnames';

import { ITabButton } from 'ui/atoms/TabButton/interface';

import styles from './styles.module.scss';

function TabButton({
  title,
  active,
  onClick,
  extraClassName,
  style,
  ...props
}: ITabButton) {
  const buttonStyle = useMemo(
    () =>
      cn(styles.button, extraClassName, {
        [styles.active]: active,
      }),
    [active, extraClassName],
  );

  return (
    <button
      style={style}
      type="button"
      className={buttonStyle}
      onClick={onClick}
      {...props}
    >
      <span className={styles.innerContent}>
        <span>{title}</span>
      </span>
    </button>
  );
}
export default TabButton;
