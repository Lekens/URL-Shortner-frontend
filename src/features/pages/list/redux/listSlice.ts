import { createSlice } from '@reduxjs/toolkit';

export const listSlice: any = createSlice({
  name: 'list',
  initialState: {
    urlList: [],
    loading: true,
    responseMessage: null,
    responseStatus: null,
  } as any,
  reducers: {
    fetchURLsState: (state) => state,

    sendSuccess: (state, action) => {
      if (
        action.payload &&
        action.payload.data &&
        action.payload.data.status === 'SUCCESS'
      ) {
        const resp = action.payload.data;
        state.urlList = resp.data;
        state.responseMessage = resp.msg || 'Request successful!';
        state.responseStatus = resp.status;
      } else {
        const resp = action.payload.response.data;
        state.responseMessage = resp.msg || 'Unknown error!';
        state.responseStatus = resp.status;
        state.urlList = [];
      }
      state.loading = false;
    },

    handleError: (state) => {
      state.loading = false;
    },

    fetchState: (state) => state,

    startLoading: (state) => {
      state.loading = true;
    },
  },
});
export const {
  sendSuccess,
  fetchState,
  startLoading,
  handleError,
  fetchURLsState,
} = listSlice.actions;
export default listSlice.reducer;
