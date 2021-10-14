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
  fetchURLsState,
} from 'features/pages/list/redux/listSlice';
import { apiRequest } from 'services/apiRequest.service';

const queryURLApi = () => {
  return apiRequest.get('/list');
};
const urlFetchEpic: MyEpic = (action$, state$) =>
  action$.pipe(
    filter(fetchURLsState.match),
    withLatestFrom(state$),
    mergeMap(([,]) => from(queryURLApi())),
    map((action: any) => sendSuccess(action)),
    catchError(() => of(handleError())),
  );
export const listUrlEpic: MyEpic = combineEpics(urlFetchEpic);
