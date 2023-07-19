import { configureStore } from '@reduxjs/toolkit';
import organismReducer from './reducers/organisms';

const store = configureStore({
  reducer: organismReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
