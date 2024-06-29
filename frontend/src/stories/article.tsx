import styled from 'styled-components';

type Prop = {
  title: string;
  body: string;
};

export function Article({ title, body }: Prop) {
  return (
    <Div>
      <ArticleContainerTitle title={title} />
      <ArticleContainerBody body={body} />
    </Div>
  );
}

const Div = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
`;

function ArticleContainerTitle({ title }: { title: string }) {
  return <TitleDiv>{title}</TitleDiv>;
}

function ArticleContainerBody({ body }: { body: string }) {
  return <BodyDiv>{body}</BodyDiv>;
}

const TitleDiv = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const BodyDiv = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;
