import { createSlice } from '@reduxjs/toolkit';

export const homeSlice: any = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    longUrl: null,
    encodeData: {},
    responseMessage: null,
    responseStatus: null,
  } as any,
  reducers: {
    sendSuccess: (state, action) => {
      if (action.payload.status === 'SUCCESS') {
        const resp = action.payload.data;
        state.encodeData = resp.data;
        state.responseMessage = resp.msg || 'Request successful!';
        state.responseStatus = resp.status;
      } else {
        const resp = action.payload.response.data;
        state.responseMessage = resp.msg || 'Unknown error!';
        state.responseStatus = resp.status;
        state.encodeData = {};
      }

      state.loading = false;
    },

    handleError: (state) => {
      state.loading = false;
    },

    fetchState: (state) => state,
    encodeUrl: (state, action) => {
      state.longUrl = action.payload;
    },

    startLoading: (state) => {
      state.loading = true;
    },
  },
});
export const { sendSuccess, fetchState, startLoading, handleError, encodeUrl } =
  homeSlice.actions;
export default homeSlice.reducer;
