import React from 'react';
import ReactDOM from 'react-dom/client';

import About from './routes/About';
import Blogs from './routes/Blogs';
import ErrorPage from './error-page';
import Root from './routes/root';
import './style/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { rootLoader, aboutLoader, blogsLoader } from './roader/index';
import { rootAction, aboutAction, blogsAction } from './action';

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
        action: rootAction,
      },
      {
        path: 'about',
        element: <About />,
        loader: aboutLoader,
        action: aboutAction,
      },
      {
        path: 'blog',
        element: <Blogs />,
        loader: blogsLoader,
        action: blogsAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
