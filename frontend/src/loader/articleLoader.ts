type Prop = {
  articleId: string;
};

export async function articleLoader({ params }: { params: Prop }) {
  const articleId = params.articleId;
  const response = await fetch(`/api/articles/${articleId}`);
  const articles = await response.json();
  return articles;
}
