import { useLoaderData } from 'react-router-dom';
import { ArticleList } from 'src/components/Blog';
import { Text } from 'src/stories/Atoms/Text';

type ArticleProp = {
  articleId: number;
  title: string;
  body: string;
  created: Date;
  lastModified: Date;
};

export const Blog = () => {
  const articles = useLoaderData() as ArticleProp[];

  return (
    <>
      <Text content="Blog" isBold={true} size="LARGE" />
      <ArticleList articles={articles} />
    </>
  );
};
