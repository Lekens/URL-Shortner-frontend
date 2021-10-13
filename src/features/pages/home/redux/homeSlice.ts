import { createSlice } from '@reduxjs/toolkit';

export const homeSlice: any = createSlice({
  name: 'home',
  initialState: {} as any,
  reducers: {
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
export const { sendSuccess, fetchState, startLoading, handleError } =
  homeSlice.actions;
export default homeSlice.reducer;
