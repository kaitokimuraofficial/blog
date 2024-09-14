import { LoaderFunctionArgs } from 'react-router-dom';

export async function ArticleLoader({ params }: LoaderFunctionArgs) {
  const articleId = params.articleId;
  const response = await fetch(`/api/articles/${articleId}`);
  const article = await response.json();
  return article;
}
