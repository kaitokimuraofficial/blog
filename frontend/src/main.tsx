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

import { RootAction, AboutAction, BlogsAction } from './action';
import { RootLoader, AboutLoader, BlogsLoader, ArticleLoader } from './loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <About />,
        loader: RootLoader,
        action: RootAction,
      },
      {
        path: 'about',
        element: <About />,
        loader: AboutLoader,
        action: AboutAction,
      },
      {
        path: 'blog',
        element: <Blogs />,
        loader: BlogsLoader,
        action: BlogsAction,
      },
      {
        path: 'blog/articles/:articleId',
        element: <Article />,
        loader: ArticleLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
