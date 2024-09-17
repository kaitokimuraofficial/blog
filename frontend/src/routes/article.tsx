import { useLoaderData } from 'react-router-dom';
import { Markdown } from 'src/util/markdown';
import { Text } from 'src/stories/Atoms/Text';

type Prop = {
  articleId: number;
  title: string;
  body: string;
  created: string;
  lastModified: string;
};

export function Article() {
  const article = useLoaderData() as Prop;

  return (
    <>
      <Text content={article.title} />
      <Markdown body={article.body} />
    </>
  );
}
