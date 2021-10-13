import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Action, configureStore, combineReducers } from '@reduxjs/toolkit';

import { IAppState } from 'redux-settings/interfaces';
import { shortenerEpic } from 'features/pages/home/epics/shortenerEpic';

export const reducer = combineReducers({});

export const rootEpic = combineEpics(shortenerEpic);

const epicMiddleware = createEpicMiddleware<Action, Action, IAppState>();

export const store = configureStore({
  reducer,
  middleware: [epicMiddleware],
});
epicMiddleware.run(rootEpic);
