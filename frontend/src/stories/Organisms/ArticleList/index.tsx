import { Link } from 'react-router-dom';
import { Text } from 'src/stories/Atoms/Text';
import styles from './articleList.module.css';

type articleType = {
  articleId: number;
  title: string;
  body: string;
  created: Date;
  lastModified: Date;
};

type Prop = {
  articles: articleType[];
};

export function ArticleList({ articles }: Prop) {
  return (
    <ol style={{ listStyleType: 'none' }}>
      {articles.map(({ articleId, title, body }) => (
        <li key={articleId}>
          <Link to={`/articles/${articleId}`}>
            <div className={styles.container}>
              <Text content={title} isBold={true} size="LARGE" color="BLACK" />
              <Text content={body} color="BLACK" />
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
