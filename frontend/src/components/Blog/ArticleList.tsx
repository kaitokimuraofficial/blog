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
    <ol>
      {articles.map((article, index) => (
        <li key={index}>
          <ArticleContainer title={article.title} id={article.articleId} />
        </li>
      ))}
    </ol>
  );
}
