import { Blog } from 'src/stories/Templates/Blog';
import { useLoaderData } from 'react-router-dom';

type ArticleType = {
  articleId: number;
  title: string;
  body: string;
  created: Date;
  lastModified: Date;
};

export const BlogPage = () => {
  const articles = useLoaderData() as ArticleType[];

  return <Blog articles={articles} />;
};
