import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  fetchURLsState,
  startLoading,
} from 'features/pages/list/redux/listSlice';
import {
  getLoadingState,
  selectURLList,
} from 'features/pages/list/redux/selectors';
import { Loading } from 'ui/atoms/Loading';
import { Table } from 'features/common/components/Table';

import styles from './styles.module.scss';

function ListScreen() {
  const dispatch = useDispatch();

  const urlList = useSelector(selectURLList);
  const loading = useSelector(getLoadingState);

  useEffect(() => {
    dispatch(startLoading());
    dispatch(fetchURLsState());
  }, []);
  return (
    <div className={styles.wrapper}>
      {loading ? <Loading /> : <Table data={urlList} />}
    </div>
  );
}

export default ListScreen;
