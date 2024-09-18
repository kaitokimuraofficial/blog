import { Article } from 'src/stories/Templates/Article';
import { useLoaderData } from 'react-router-dom';

type ArticleType = {
  articleId: number;
  title: string;
  body: string;
  created: Date;
  lastModified: Date;
};

export const ArticlePage = () => {
  const article = useLoaderData() as ArticleType;

  return (
    <Article
      articleId={article.articleId}
      title={article.title}
      body={article.body}
      created={article.created}
      lastModified={article.lastModified}
    />
  );
};
