import { Markdown } from 'src/util/markdown';
import { Text } from 'src/stories/Atoms/Text';

type Prop = {
  articleId: number;
  title: string;
  body: string;
  created: Date;
  lastModified: Date;
};

export const Article = (article: Prop) => {
  return (
    <>
      <Text content={article.title} />
      <Markdown body={article.body} />
    </>
  );
};
