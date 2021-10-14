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
  decodeUrl,
} from 'features/pages/decode/redux/decodeSlice';
import { apiRequest } from 'services/apiRequest.service';
import { selectUrlFromState } from 'features/pages/decode/redux/selectors';

const decodeShortURL = (shortUrl: string) => {
  return apiRequest.post('/decode', { shortUrl });
};

const makeLongUrlEpic: MyEpic = (action$, state$) =>
  action$.pipe(
    filter(decodeUrl.match),
    withLatestFrom(state$),
    mergeMap(([, state]) => from(decodeShortURL(selectUrlFromState(state)))),
    map((action: any) => sendSuccess(action)),
    catchError(() => of(handleError())),
  );

export const decodeEpic: MyEpic = combineEpics(makeLongUrlEpic);
