// Core
import { useLocation } from 'react-router-dom';

// Components
import { TabButton } from 'ui/atoms/TabButton';
import { ComponentWrapper } from 'ui/atoms/ComponentWrapper';
// Instruments
import history from 'utils/history';
import { getCurrentTab } from 'features/common/components/TabNavigation/getCurrentTab';
import { TABS } from 'configs/tabs';

// Styles
import styles from './styles.module.scss';

function TabNavigation() {
  const { pathname } = useLocation();
  const onTabSelect = (url: string) => () => history.push(url);

  return (
    <div className={styles.wrapperTopTabs}>
      <ComponentWrapper>
        {TABS.map((item) => (
          <TabButton
            style={{
              margin: '0 20px 0 0',
            }}
            key={item.url}
            onClick={onTabSelect(item.redirect)}
            title={item.title}
            active={getCurrentTab(pathname, item.url)}
          />
        ))}
      </ComponentWrapper>
    </div>
  );
}

export default TabNavigation;
