import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Action, configureStore, combineReducers } from '@reduxjs/toolkit';

import { IAppState } from 'redux-settings/interfaces';
import { shortenerEpic } from 'features/pages/home/epics/shortenerEpic';
import { listUrlEpic } from 'features/pages/list/ListScreen/epics/listUrlEpic';
import { decodeEpic } from 'features/pages/decode/epics/decodeEpic';
import { showStatEpic } from 'features/common/components/ShowStats/epics/showStatEpic';
import decodeSliceReducer from 'features/pages/decode/redux/decodeSlice';
import homeSliceReducer from 'features/pages/home/redux/homeSlice';
import listSliceReducer from 'features/pages/list/redux/listSlice';
import statSliceReducer from 'features/common/components/ShowStats/redux/showStatSlice';

export const reducer = combineReducers({
  decode: decodeSliceReducer,
  encode: homeSliceReducer,
  list: listSliceReducer,
  stat: statSliceReducer,
});

export const rootEpic = combineEpics(
  shortenerEpic,
  listUrlEpic,
  decodeEpic,
  showStatEpic,
);

const epicMiddleware = createEpicMiddleware<Action, Action, IAppState>();

export const store = configureStore({
  reducer,
  middleware: [epicMiddleware],
});
epicMiddleware.run(rootEpic);
