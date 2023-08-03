import { createAction, createReducer } from '@reduxjs/toolkit';

interface HamburgerState {
  isOpen: boolean;
}

export const initialState: HamburgerState = {
  isOpen: false,
};

export const toggleHamburger = createAction<boolean>('hamburger/toggle');

const hamburgerReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleHamburger, (state, action) => {
    state.isOpen = action.payload;
  });
});

export default hamburgerReducer;
