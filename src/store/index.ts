import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './reducers/admin';
import crudReducer from './reducers/crud';
import hamburgerReducer from './reducers/hamburger';
import organismReducer from './reducers/organisms';
import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    organism: organismReducer,
    user: userReducer,
    admin: adminReducer,
    crud: crudReducer,
    hamburger: hamburgerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
