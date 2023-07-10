import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './components/App/App';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />} />)
);

export default router;
