import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './error-page';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { rootLoader } from './routes/root';

import Root from './routes/root';
import Blogs from './routes/Blogs';
import About from './routes/About';
import './style/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <About />,
        loader: rootLoader,
      },
      {
        path: 'blog',
        element: <Blogs />,
        loader: rootLoader,
      },
      {
        path: 'about',
        element: <About />,
        loader: rootLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
