import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider, useLocation } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Data } from './Pages/Data';
import { Header } from './components/Header';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';

import './App.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} >
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/data' element={<Data />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/register' || location.pathname === '/login';

  return (
    <>
      {!hideNavbar && <Header />}
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
