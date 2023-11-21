import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerOpen: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    openDrawer(state, action) {
      state.drawerOpen = action.payload;
    },
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openDrawer, toggleDrawer } = layoutSlice.actions;

export default layoutSlice.reducer;
