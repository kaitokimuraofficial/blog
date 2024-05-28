type ArticleProp = {
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
          <p>{article.title}</p>
          <p>{article.body}</p>
        </li>
      ))}
    </ol>
  );
}
