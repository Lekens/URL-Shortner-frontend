import { ComponentWrapper } from 'ui/atoms/ComponentWrapper';
import { HeaderLayout } from 'features/common/components/Header/HeaderLayout';
import { FooterLayout } from 'features/common/components/Footer/FooterLayout';
import { IPageWrapper } from 'features/common/components/PageWrapper/interface';

import styles from './styles.module.scss';

function PageWrapper({ children }: IPageWrapper) {
  return (
    <div className={styles.wrapper}>
      <HeaderLayout />
      <div className={styles.wrapperChildren}>
        <ComponentWrapper extraClassName={styles.content}>
          {children}
        </ComponentWrapper>
      </div>
      <FooterLayout />
    </div>
  );
}
export default PageWrapper;
