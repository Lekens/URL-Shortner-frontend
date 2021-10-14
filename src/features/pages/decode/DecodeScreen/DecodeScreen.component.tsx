import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import {
  startLoading,
  decodeUrl,
  fetchState,
} from 'features/pages/decode/redux/decodeSlice';
import {
  getLoadingState,
  getResStatus,
  getURLData,
  getResMessage,
} from 'features/pages/decode/redux/selectors';

import styles from './styles.module.scss';

function DecodeScreen() {
  const dispatch = useDispatch();
  const [shortUrl, setShortUrl] = useState('');
  const [longUrl, setLongUrl] = useState(null);
  const [resStatus, setResStatus] = useState(null);
  const [resMessage, setResMessage] = useState(null);
  const loading = useSelector(getLoadingState);
  const decodedData = useSelector(getURLData);
  const getStatus = useSelector(getResStatus);
  const getMessage = useSelector(getResMessage);
  const decodedDataRef = useRef(decodedData);
  const statusRef = useRef(getStatus);
  const messageRef = useRef(getMessage);

  const handleChange = (event: any) => {
    setShortUrl(event.target.value);
  };
  const decodeUrlAction = () => {
    if (!shortUrl) {
      return;
    }
    dispatch(startLoading());
    dispatch(decodeUrl(shortUrl));
  };
  useEffect(() => {
    dispatch(fetchState());
    decodedDataRef.current = decodedData;
    statusRef.current = getStatus;
    messageRef.current = getMessage;
    setLongUrl(() => decodedData.longUrl);
    setResStatus(getStatus);
    setResMessage(getMessage);
  }, [loading]);

  const openURL = () => {
    if (!longUrl) {
      return;
    }
    window.open(longUrl, '_blank');
  };

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
        <div className={styles.title}>URL Decoder</div>
        <div className={styles.inputBox}>
          <input
            type="text"
            value={shortUrl}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter a URL you will like to decode"
          />
          <div className={styles.padButton}>
            <button
              disabled={loading}
              type="button"
              className={styles.generate}
              onClick={decodeUrlAction}
            >
              {loading ? 'Loading...' : 'Decode'}
            </button>
          </div>
        </div>
        <hr />
        <div className={styles.result}>
          {longUrl ? (
            <div className={styles.generatedURL}>Decoded Result</div>
          ) : null}
          <code className={styles.shortUrl} onClick={openURL}>
            {longUrl}
          </code>
        </div>
      </div>
    </div>
  );
}

export default DecodeScreen;
