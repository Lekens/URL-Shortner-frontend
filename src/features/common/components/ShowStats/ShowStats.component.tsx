import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { Loading } from 'ui/atoms/Loading';
import {
  getLoadingState,
  selectURLStatList,
} from 'features/common/components/ShowStats/redux/selectors';
import {
  fetchURLStatsState,
  setUrlCode,
  startLoading,
} from 'features/common/components/ShowStats/redux/showStatSlice';
import {
  getResMessage,
  getResStatus,
} from 'features/pages/home/redux/selectors';

import styles from './styles.module.scss';

function ShowStats(props: { code: string; closeModal: Function }) {
  const { code } = props;
  const dispatch = useDispatch();
  const [resStatus, setResStatus] = useState(null);
  const [resMessage, setResMessage] = useState(null);
  const getStatus = useSelector(getResStatus);
  const getMessage = useSelector(getResMessage);
  const statusRef = useRef(getStatus);
  const messageRef = useRef(getMessage);
  const closeModal = () => {
    props.closeModal();
  };
  dispatch(setUrlCode(code));
  const statList = useSelector(selectURLStatList);
  const loading = useSelector(getLoadingState);

  useEffect(() => {
    dispatch(startLoading());
    dispatch(fetchURLStatsState());
    statusRef.current = getStatus;
    messageRef.current = getMessage;
    setResStatus(getStatus);
    setResMessage(getMessage);
  }, [code]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h2>URL Statistics</h2>
          </div>
          <div className={styles.modalBody}>
            {loading ? (
              <Loading />
            ) : (
              <div className={styles.body}>
                <div
                  className={cn(styles.responseMessage, {
                    [styles.red]: resStatus === 'FAILURE',
                    [styles.green]: resStatus === 'SUCCESS',
                  })}
                >
                  {resMessage}
                </div>
                <div className={styles.showStatMessage}>
                  URL VISITED: {statList.timesVisited || 0} times since encoded
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowStats;
