import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: "create-item",
  initialState: {status: false, loading: true},

  reducers: {
    createdItem: (state, { payload }) => {
        state.status = payload.status
        state.loading = false
    },
    createItemLoading(state) {
        state.loading = true
    },
    createItemLoaded(state) {
        state.loading = false
    },
  },
});

export const { createItemLoading, createItemLoaded, createdItem } = slice.actions;

export default slice.reducer;
 