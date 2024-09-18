import { ArticleList } from 'src/stories/Organisms/ArticleList';
import { Text } from 'src/stories/Atoms/Text';

type ArticleType = {
  articleId: number;
  title: string;
  body: string;
  created: Date;
  lastModified: Date;
};

type Prop = {
  articles: ArticleType[];
};

export const Blog = ({ articles }: Prop) => {
  return (
    <>
      <Text content="Blog" isBold={true} size="LARGE" />
      <ArticleList articles={articles} />
    </>
  );
};
