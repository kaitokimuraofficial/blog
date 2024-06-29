/* Library */
import styled from 'styled-components';

type Prop = {
  title: string;
};

export function ArticleTitle({ title }: Prop) {
  return <H1>{title}</H1>;
}

const H1 = styled.h1`
  color: #fff;
  background-color: #222223;
  padding: 16px;
  font-size: 2rem;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;
