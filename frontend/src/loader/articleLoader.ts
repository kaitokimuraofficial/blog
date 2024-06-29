import { LoaderFunctionArgs } from 'react-router-dom';

export async function ArticleLoader({ params }: LoaderFunctionArgs) {
  const articleId = params.articleId;
  const response = await fetch(`/api/articles/${articleId}`);
  const articles = await response.json();
  return articles;
}
