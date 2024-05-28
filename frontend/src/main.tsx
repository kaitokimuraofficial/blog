/* Library */
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* Component */
import { About, Blogs, Root } from './routes';

import ErrorPage from './error-page';
import './style/index.css';

import { rootAction, aboutAction, blogsAction } from './action';
import { rootLoader, aboutLoader, blogsLoader } from './loader';

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
  <RouterProvider router={router} />,
);
