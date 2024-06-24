/* Library */
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* Component */
import { About } from './routes/about';
import { Blogs } from './routes/blogs';
import { Root } from './routes/root';
import { Article } from './routes/article';

import ErrorPage from './error-page';
import './style/index.css';

import { rootAction, aboutAction, blogsAction } from './action';
import { rootLoader, aboutLoader, blogsLoader, articleLoader } from './loader';

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
      {
        path: 'blog/articles/:articleId',
        element: <Article />,
        loader: articleLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
