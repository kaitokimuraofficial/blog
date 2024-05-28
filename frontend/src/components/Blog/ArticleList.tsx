type articleProp = {
  title: string;
  content: string;
  created: Date;
  lastModified: Date;
};

type Props = {
  articles: articleProp[];
};

export function ArticleList({ articles }: Props) {
  const key = import.meta.env.ENV_IMAGE_URL;

  const tmp: articleProp[] = [
    {
      title: "Hi",
      content: "jo",
      created: new Date(),
      lastModified: new Date()
    }
  ];

  const articleLists = articles && articles.length > 0 ? articles : tmp;

  return (
    <div>
      {articleLists.map((article, index) => (
        <div key={index}>
          <div>{article.title}</div>
          <div>{article.content}</div>
        </div>
      ))}
    </div>
  );
}
