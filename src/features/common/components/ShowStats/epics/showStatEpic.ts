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
  fetchURLStatsState,
} from 'features/common/components/ShowStats/redux/showStatSlice';
import { apiRequest } from 'services/apiRequest.service';
import { selectUrlCodeFromState } from 'features/common/components/ShowStats/redux/selectors';

const queryURLStatApi = (urlCode: string) => {
  return apiRequest.get(`/statistic/${urlCode}`);
};
const urlStatFetchEpic: MyEpic = (action$, state$) =>
  action$.pipe(
    filter(fetchURLStatsState.match),
    withLatestFrom(state$),
    mergeMap(([, state]) =>
      from(queryURLStatApi(selectUrlCodeFromState(state))),
    ),
    map((action: any) => sendSuccess(action)),
    catchError(() => of(handleError())),
  );

export const showStatEpic: MyEpic = combineEpics(urlStatFetchEpic);
