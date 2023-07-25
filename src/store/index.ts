import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/admin';
import organismReducer from './reducers/organisms';
import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    organism: organismReducer,
    user: userReducer,
    admin: adminReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
