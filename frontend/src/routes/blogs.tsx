/* Library */
import { useLoaderData } from 'react-router-dom';

/* Component */
import { ArticleList } from 'src/components/Blog';
import { Text } from 'src/stories/Atoms/Text/text';

/* Types */
type ArticleProp = {
  articleId: number;
  title: string;
  body: string;
  created: Date;
  lastModified: Date;
};

export function Blogs() {
  const articles = useLoaderData() as ArticleProp[];

  return (
    <>
      <Text content="Blog" isBold={true} size="LARGE" />
      <ArticleList articles={articles} />
    </>
  );
}
