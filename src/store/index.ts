// Importez la fonction configureStore du package '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit';

// Importez les fonctions de réduction des fichiers './reducers'
import adminReducer from './reducers/admin';
import crudReducer from './reducers/crud';
import hamburgerReducer from './reducers/hamburger';
import organismReducer from './reducers/organisms';
import userReducer from './reducers/user';

// Configurez le magasin Redux en utilisant la fonction configureStore
const store = configureStore({
  // Définissez les réducteurs pour chaque tranche de l'état
  reducer: {
    organism: organismReducer,
    user: userReducer,
    admin: adminReducer,
    crud: crudReducer,
    hamburger: hamburgerReducer,
  },
});

// Exportez le magasin configuré en tant qu'exportation par défaut
export default store;

// Définissez les types pour l'état racine et l'action de l'application en fonction de l'instance du magasin
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
