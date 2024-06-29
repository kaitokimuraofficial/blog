/* Library */
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* Component */
import { About } from './routes/about';
import { Article } from './routes/article';
import { ArticleEdit } from './routes/articleEdit';
import { Blogs } from './routes/blogs';
import { Root } from './routes/root';

import ErrorPage from './error-page';
import './style/index.css';

import {
  AboutAction,
  ArticleEditAction,
  BlogsAction,
  RootAction,
} from './action';
import { AboutLoader, ArticleLoader, BlogsLoader, RootLoader } from './loader';

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
        path: 'articles/:articleId',
        element: <Article />,
        loader: ArticleLoader,
      },
      {
        path: 'blog',
        element: <Blogs />,
        loader: BlogsLoader,
        action: BlogsAction,
      },
      {
        path: 'articles/:articleId/edit',
        element: <ArticleEdit />,
        loader: ArticleLoader,
        action: ArticleEditAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
