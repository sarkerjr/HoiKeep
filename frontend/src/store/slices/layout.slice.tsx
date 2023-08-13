import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openDrawer: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setDrawerState: (state, action) => {
      state.openDrawer = action.payload;
    },
    toggleDrawerState: (state) => {
      state.openDrawer = !state.openDrawer;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDrawerState, toggleDrawerState } = layoutSlice.actions;

export default layoutSlice.reducer;
