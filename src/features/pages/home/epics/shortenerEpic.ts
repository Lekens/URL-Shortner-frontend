import { combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import axios from 'axios';
import {
  filter,
  map,
  mergeMap,
  withLatestFrom,
  catchError,
} from 'rxjs/operators';

import { MyEpic } from 'redux-settings/interfaces';
import {
  sendSuccess,
  handleError,
  fetchState,
} from 'features/pages/home/redux/homeSlice';

const getShortUrl = () => {
  return axios.post('http://localhost:8090/api/encode', {});
};

const makeShortUrlEpic: MyEpic = (action$, state$) =>
  action$.pipe(
    filter(fetchState.match),
    withLatestFrom(state$),
    mergeMap(([,]) => from(getShortUrl())),
    map(() => sendSuccess()),
    catchError(() => of(handleError())),
  );

export const shortenerEpic: MyEpic = combineEpics(makeShortUrlEpic);
