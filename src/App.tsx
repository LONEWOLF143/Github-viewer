import Home from './pages/Home';
import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './ui/Layout';
import Repos from './pages/Repos';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/repo",
        element: <Repos />
      }
    ]

  }

])

const App: FC = () => {
  return <RouterProvider router={router}/>
};

export default App;
