import { Epic } from 'redux-observable';
import { Action } from '@reduxjs/toolkit';

import { reducer } from 'redux-settings/store';

export type IAppState = ReturnType<typeof reducer>;
export type MyEpic = Epic<Action, Action, IAppState>;
