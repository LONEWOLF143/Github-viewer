import Home from './pages/Home';
import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './ui/Layout';
import Repos from './pages/Repos';
import Followers from './pages/Followers';
import Gists from './pages/Gists';

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
      },
      {
        path: "/followers",
        element: <Followers />
      },
      {
        path: "/gists",
        element: <Gists />
      }
    ]

  }

])

const App: FC = () => {
  return <RouterProvider router={router}/>
};

export default App;
