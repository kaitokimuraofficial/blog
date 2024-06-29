import { ArticleContainer } from './articleContainer';

type ArticleProp = {
  articleId: number;
  title: string;
  body: string;
  created: Date;
  lastModified: Date;
};

type Props = {
  articles: ArticleProp[];
};

export function ArticleList({ articles }: Props) {
  return (
    <ol style={{ listStyleType: 'none' }}>
      {articles.map(({ articleId, title, body }) => (
        <li key={articleId}>
          <ArticleContainer id={articleId} title={title} body={body} />
        </li>
      ))}
    </ol>
  );
}
