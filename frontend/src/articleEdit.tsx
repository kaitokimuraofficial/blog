import React, { useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

type Prop = {
  articleId: number;
  title: string;
  body: string;
  created: string;
  lastModified: string;
};

export function ArticleEdit() {
  const initialData = useLoaderData() as Prop[];
  const initialArticle = initialData[0];

  const [article, setArticle] = useState(initialArticle);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticle({ ...article, title: event.target.value });
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticle({ ...article, body: event.target.value });
  };

  return (
    <Container>
      <Title>Edit Article</Title>
      <Form method="post">
        <FormGroup>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={article.title}
            onChange={handleTitleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={article.body}
            onChange={handleBodyChange}
            rows={8}
            required
          />
        </FormGroup>
        <FormGroup>
          <SubmitButton type="submit">Save Changes</SubmitButton>
        </FormGroup>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
