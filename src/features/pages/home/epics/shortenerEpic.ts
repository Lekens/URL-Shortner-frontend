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
  fetchState,
} from 'features/pages/home/redux/homeSlice';

const placePlay = () => {
  return of({});
};

const placePlaysEpic: MyEpic = (action$, state$) =>
  action$.pipe(
    filter(fetchState.match),
    withLatestFrom(state$),
    mergeMap(([,]) => from(placePlay())),
    map(() => sendSuccess()),
    catchError(() => of(handleError())),
  );

export const shortenerEpic: MyEpic = combineEpics(placePlaysEpic);
