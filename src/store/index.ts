import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/admin';
import organismReducer from './reducers/organisms';

const store = configureStore({
  reducer: {
    organism: organismReducer,
    admin: adminReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
