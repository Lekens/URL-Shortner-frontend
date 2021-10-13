import { createSlice } from '@reduxjs/toolkit';

export const decodeSlice: any = createSlice({
  name: 'decode',
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
  decodeSlice.actions;
export default decodeSlice.reducer;
