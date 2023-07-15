import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './App.scss';

function App() {
  return (
    <div id="bo-app">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
