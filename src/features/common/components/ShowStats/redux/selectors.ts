import { createSelector } from '@reduxjs/toolkit';

const selectUrlStatState = (state: any) => state.stat;

export const getLoadingState = createSelector(
  [selectUrlStatState],
  (urlStatState) => urlStatState.loading,
);

export const selectURLStatList = createSelector(
  [selectUrlStatState],
  (urlStatState) => urlStatState.statList,
);
export const selectUrlCodeFromState = createSelector(
  [selectUrlStatState],
  (urlStatState) => urlStatState.urlCode,
);
