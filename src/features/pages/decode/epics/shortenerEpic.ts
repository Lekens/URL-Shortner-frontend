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
} from 'features/pages/decode/redux/decodeSlice';

const getLongUrl = () => {
  return axios.post('http://localhost:8090/api/decode', {});
};

const makeLongUrlEpic: MyEpic = (action$, state$) =>
  action$.pipe(
    filter(fetchState.match),
    withLatestFrom(state$),
    mergeMap(([,]) => from(getLongUrl())),
    map(() => sendSuccess()),
    catchError(() => of(handleError())),
  );

export const decodeEpic: MyEpic = combineEpics(makeLongUrlEpic);
