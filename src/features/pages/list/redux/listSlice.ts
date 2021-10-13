import { createSlice } from '@reduxjs/toolkit';

export const listSlice: any = createSlice({
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
  listSlice.actions;
export default listSlice.reducer;
