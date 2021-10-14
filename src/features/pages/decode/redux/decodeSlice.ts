import { createSlice } from '@reduxjs/toolkit';

export const decodeSlice: any = createSlice({
  name: 'decode',
  initialState: {
    loading: false,
    shortUrl: null,
    decodeData: {},
    responseMessage: null,
    responseStatus: null,
  } as any,
  reducers: {
    sendSuccess: (state, action) => {
      if (
        action.payload &&
        action.payload.data &&
        action.payload.data.status === 'SUCCESS'
      ) {
        const resp = action.payload.data;
        state.decodeData = resp.data;
        state.responseMessage = resp.msg || 'Request successful!';
        state.responseStatus = resp.status;
      } else {
        const resp = action.payload.response.data;
        state.responseMessage = resp.msg || 'Unknown error!';
        state.responseStatus = resp.status;
        state.decodeData = {};
      }
      state.loading = false;
    },

    handleError: (state) => {
      state.loading = false;
    },

    fetchState: (state) => state,
    decodeUrl: (state, action) => {
      state.shortUrl = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
  },
});
export const { sendSuccess, fetchState, startLoading, handleError, decodeUrl } =
  decodeSlice.actions;
export default decodeSlice.reducer;
