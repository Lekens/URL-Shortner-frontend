import { ComponentWrapper } from 'ui/atoms/ComponentWrapper';
// import { ReactComponent as ScoreCardIcon } from 'features/common/assets/icons/svg/score-card.svg';
// import { ReactComponent as PlayIcon } from 'features/common/assets/icons/svg/play-icon.svg';
// import { ReactComponent as StreaksIcon } from 'features/common/assets/icons/svg/streaks-icon.svg';
// import { ReactComponent as LeaderboardIcon } from 'features/common/assets/icons/svg/leaderboard-icon.svg';
// import { ReactComponent as MoreIcon } from 'features/common/assets/icons/svg/more-icon.svg';

import styles from './styles.module.scss';

const onClick = (e: any) => {
  e.preventDefault();
};
function FooterLayout() {
  return (
    <div className={styles.wrapper}>
      <ComponentWrapper>
        <div className={styles.content}>
          {/*<a href="#/" onClick={onClick} className={styles.footerTabs}>
            <PlayIcon className={styles.iconDimension} />
          </a>
          <a href="#/" onClick={onClick} className={styles.footerTabs}>
            <ScoreCardIcon className={styles.iconDimension} />
          </a>
          <a href="#/" onClick={onClick} className={styles.footerTabs}>
            <StreaksIcon className={styles.iconDimension} />
          </a>
          <a href="#/" onClick={onClick} className={styles.footerTabs}>
            <LeaderboardIcon className={styles.iconDimension} />
          </a>
          <a href="#/" onClick={onClick} className={styles.footerTabs}>
            <MoreIcon className={styles.iconDimension} />
          </a>*/}
        </div>
      </ComponentWrapper>
    </div>
  );
}
export default FooterLayout;
