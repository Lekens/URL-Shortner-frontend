import { createSlice } from '@reduxjs/toolkit';

export const listSlice: any = createSlice({
  name: 'list',
  initialState: {
    urlList: [],
    loading: true,
  } as any,
  reducers: {
    fetchURLsState: (state) => state,

    sendSuccess: (state) => {
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
