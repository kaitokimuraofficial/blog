import { Markdown } from 'src/util/markdown';

type Prop = {
  body: string;
};

export function ArticleBody({ body }: Prop) {
  return <Markdown body={body} />;
}
