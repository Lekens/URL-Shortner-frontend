import { createSlice } from '@reduxjs/toolkit';

export const showStatSlice: any = createSlice({
  name: 'stat',
  initialState: {
    statList: [],
    urlCode: null,
    loading: false,
    responseMessage: null,
    responseStatus: null,
  } as any,
  reducers: {
    fetchURLStatsState: (state) => state,

    sendSuccess: (state, action) => {
      if (
        action.payload &&
        action.payload.data &&
        action.payload.data.status === 'SUCCESS'
      ) {
        const resp = action.payload.data;
        state.statList = resp.data;
        state.responseMessage = resp.msg || 'Request successful!';
        state.responseStatus = resp.status;
      } else {
        const resp = action.payload.response.data;
        state.responseMessage = resp.msg || 'Unknown error!';
        state.responseStatus = resp.status;
        state.statList = [];
      }
      state.loading = false;
    },

    handleError: (state) => {
      state.loading = false;
    },

    startLoading: (state) => {
      state.loading = true;
    },
    setUrlCode: (state, action) => {
      state.urlCode = action.payload;
    },
  },
});
export const {
  sendSuccess,
  startLoading,
  handleStatError,
  handleError,
  setUrlCode,
  fetchURLStatsState,
} = showStatSlice.actions;
export default showStatSlice.reducer;
