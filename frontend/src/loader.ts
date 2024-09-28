import { LoaderFunctionArgs } from 'react-router-dom';

export async function AboutLoader() {
  // const response = await fetch('/api/health');
  // const movies = await response.json();
  // console.log('about');
  // console.log(movies);
  return null;
}

export async function ArticleLoader({ params }: LoaderFunctionArgs) {
  const articleId = params.articleId;
  const response = await fetch(`/api/articles/${articleId}`);
  const article = await response.json();
  return article;
}

export async function BlogsLoader() {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  return articles;
}

export async function RootLoader() {
  // const response = await fetch('/api/health');
  // const movies = await response.json();
  // console.log('root');
  // console.log(movies);
  return null;
}
