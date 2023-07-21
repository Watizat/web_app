import { configureStore } from '@reduxjs/toolkit';
import organismReducer from './reducers/organisms';
import settingsReducer from './reducers/settings';

const store = configureStore({
  reducer: {
    organism: organismReducer,
    settings: settingsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
