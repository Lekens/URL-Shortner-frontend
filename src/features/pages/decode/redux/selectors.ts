import { createSelector } from '@reduxjs/toolkit';

const selectUrlState = (state: any) => state.decode;

export const getURLData = createSelector(
  [selectUrlState],
  (urlsState) => urlsState
);

