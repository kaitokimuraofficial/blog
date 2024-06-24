import { useLoaderData } from 'react-router-dom';

type Prop = {
  articleId: number;
  title: string;
  body: string;
  created: string;
  lastModified: string;
};

export function Article() {
  const data = useLoaderData()[0] as Prop;

  return (
    <>
      <h1>{data.title}</h1>
      <h3>{data.body}</h3>
    </>
  );
}
