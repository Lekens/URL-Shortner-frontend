import { ComponentWrapper } from 'ui/atoms/ComponentWrapper';

import styles from './styles.module.scss';

function FooterLayout() {
  return (
    <div className={styles.wrapper}>
      <ComponentWrapper>
        <div className={styles.content}>Assignment by Indicina</div>
      </ComponentWrapper>
    </div>
  );
}
export default FooterLayout;
