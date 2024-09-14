import { useLoaderData } from 'react-router-dom';
import { ArticleBody } from 'src/components/Blog/articleBody';
import { ArticleTitle } from 'src/components/Blog/articleTitle';

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
      <ArticleTitle title={article.title} />
      <ArticleBody body={article.body} />
    </>
  );
}
