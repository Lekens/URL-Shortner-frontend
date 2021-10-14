import { createSelector } from '@reduxjs/toolkit';

const selectUrlState = (state: any) => state.decode;

export const getURLData = createSelector(
  [selectUrlState],
  (urlsState) => urlsState.decodeData,
);

export const getResStatus = createSelector(
  [selectUrlState],
  (urlsState) => urlsState.responseStatus,
);
export const getResMessage = createSelector(
  [selectUrlState],
  (urlsState) => urlsState.responseMessage,
);
export const getLoadingState = createSelector(
  [selectUrlState],
  (urlsState) => urlsState.loading,
);

export const selectUrlFromState = createSelector(
  [selectUrlState],
  (urlsState) => urlsState.shortUrl,
);
