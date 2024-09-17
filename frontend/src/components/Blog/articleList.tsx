import { Link } from 'react-router-dom';
import { Text } from 'src/stories/Atoms/Text';
import styled from 'styled-components';

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
            <ArticleContainerDiv>
              <Text content={title} isBold={true} size="LARGE" color="BLACK" />
              <Text content={body} color="BLACK" />
            </ArticleContainerDiv>
          </Link>
        </li>
      ))}
    </ol>
  );
}

const ArticleContainerDiv = styled.div`
  color: #000;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`;
