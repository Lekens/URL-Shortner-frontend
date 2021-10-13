import { combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
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
  encodeUrl,
} from 'features/pages/home/redux/homeSlice';
import { selectUrlFromState } from 'features/pages/home/redux/selectors';
import { apiRequest } from 'services/apiRequest.service';

const encodeLongURL = (longUrl: string) => {
  return apiRequest.post('/encode', { longUrl });
};

const makeShortUrlEpic: MyEpic = (action$, state$) =>
  action$.pipe(
    filter(encodeUrl.match),
    withLatestFrom(state$),
    mergeMap(([, state]) => from(encodeLongURL(selectUrlFromState(state)))),
    map((action: any) => sendSuccess(action)),
    catchError(() => of(handleError())),
  );

export const shortenerEpic: MyEpic = combineEpics(makeShortUrlEpic);
