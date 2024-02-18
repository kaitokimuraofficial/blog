import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './error-page';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { rootLoader } from './routes/root';

import Root from './routes/root';
import Blogs from './routes/blogs';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'blogs',
    element: <Blogs />,
    loader: rootLoader
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
