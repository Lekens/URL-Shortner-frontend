import { createSelector } from '@reduxjs/toolkit';

const selectUrlListState = (state: any) => state.list;

export const selectURLList = createSelector(
  [selectUrlListState],
  (urlsState) => urlsState.urlList,
);
export const getLoadingState = createSelector(
  [selectUrlListState],
  (urlsState) => urlsState.loading,
);
