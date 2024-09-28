import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutPage, ArticlePage, BlogPage, ErrorPage } from './stories/Pages';
import { ArticleEdit } from './articleEdit';
import { Root } from './root';

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
        element: <AboutPage />,
        loader: RootLoader,
        action: RootAction,
      },
      {
        path: 'about',
        element: <AboutPage />,
        loader: AboutLoader,
        action: AboutAction,
      },
      {
        path: 'articles/:articleId',
        element: <ArticlePage />,
        loader: ArticleLoader,
      },
      {
        path: 'blog',
        element: <BlogPage />,
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
