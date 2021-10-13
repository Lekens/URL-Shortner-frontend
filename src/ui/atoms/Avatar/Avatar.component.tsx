import { useMemo } from 'react';

import cn from 'classnames';

import { IAvatar } from 'ui/atoms/Avatar/interface';

import styles from './styles.module.scss';

function Avatar({ src, size, extraClassName }: IAvatar) {
  const avatarStyle = useMemo(
    () => cn(styles.wrapper, extraClassName),
    [extraClassName],
  );

  return (
    <div className={avatarStyle} style={{ width: size, height: size }}>
      {src && <img src={src} alt={src} className={styles.img} />}
    </div>
  );
}
export default Avatar;
