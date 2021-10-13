import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import {
  startLoading,
  encodeUrl,
  fetchState,
} from 'features/pages/home/redux/homeSlice';
import {
  getLoadingState,
  getResStatus,
  getURLData,
  getResMessage,
} from 'features/pages/home/redux/selectors';

import styles from './styles.module.scss';

function HomeScreen() {
  const dispatch = useDispatch();
  const [shortUrl, setShortUrl] = useState(null);
  const [longUrl, setLongUrl] = useState('');
  const [resStatus, setResStatus] = useState(null);
  const [resMessage, setResMessage] = useState(null);
  const loading = useSelector(getLoadingState);
  const encodedData = useSelector(getURLData);
  const getStatus = useSelector(getResStatus);
  const getMessage = useSelector(getResMessage);
  const encodedDataRef = useRef(encodedData);
  const statusRef = useRef(getStatus);
  const messageRef = useRef(getMessage);

  const openUrl = () => {
    if (!shortUrl) {
      return;
    }
    window.open(shortUrl, '_blank');
  };
  const handleChange = (event: any) => {
    setLongUrl(event.target.value);
  };
  const generateUrl = () => {
    if (!longUrl) {
      return;
    }
    dispatch(startLoading());
    dispatch(encodeUrl(longUrl));
  };
  useEffect(() => {
    dispatch(fetchState());
    encodedDataRef.current = encodedData;
    statusRef.current = getStatus;
    messageRef.current = getMessage;
    setShortUrl(() => encodedData.shortUrl);
    setResStatus(getStatus);
    setResMessage(getMessage);
  }, [loading]);
  return (
    <div className={styles.wrapper}>
      <span
        className={cn(styles.responseMessage, {
          [styles.red]: resStatus === 'FAILURE',
          [styles.green]: resStatus === 'SUCCESS',
        })}
      >
        {resMessage}
      </span>
      <div className={styles.box}>
        <div className={styles.title}>URL Encoder</div>
        <div className={styles.inputBox}>
          <input
            type="text"
            value={longUrl}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter a URL you will like to encode/shorten"
          />
          <div className={styles.padButton}>
            <button
              disabled={loading}
              type="button"
              className={styles.generate}
              onClick={generateUrl}
            >
              {loading ? 'Loading...' : 'Generate'}
            </button>
          </div>
        </div>
        <hr />
        <div className={styles.result}>
          {shortUrl ? (
            <div className={styles.generatedURL}>Url Generated</div>
          ) : null}
          <code className={styles.shortUrl} onClick={openUrl}>
            {shortUrl}
          </code>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
