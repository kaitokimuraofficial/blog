import { useLoaderData } from 'react-router-dom';

type Prop = {
  articleId: number;
  title: string;
  body: string;
  created: string;
  lastModified: string;
};

export function Article() {
  const data = useLoaderData() as Prop[];
  const article = data[0];

  return (
    <>
      <h1>{article.title}</h1>
      <h3>{article.body}</h3>
    </>
  );
}
