export async function articleLoader({ params }: any) {
  const articleId = params.articleId;
  const response = await fetch(`/api/articles/${articleId}`);
  const articles = await response.json();
  return articles;
}
