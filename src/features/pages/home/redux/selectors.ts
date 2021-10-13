import { createSelector } from '@reduxjs/toolkit';

const selectUrlState = (state: any) => state.encode;

export const getURLData = createSelector(
  [selectUrlState],
  (urlsState) => urlsState
);

