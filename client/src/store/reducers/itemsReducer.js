import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: "items",
  initialState: {items: [], loading: true},

  reducers: {
    fetchItems: (state, { payload }) => {
        state.items = payload
        state.loading = false
    },
    itemsLoading(state) {
        state.loading = true
    },
    itemsLoaded(state) {
        state.loading = false
    },
  },
});

export const { fetchItems, itemsLoading, itemsLoaded } = slice.actions;

export default slice.reducer;
 