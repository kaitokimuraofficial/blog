/* Library */
import styled from 'styled-components';

type Prop = {
  title: string;
};

export function ArticleTitle({ title }: Prop) {
  return <H1>{title}</H1>;
}

const H1 = styled.h1`
  color: white;
`;
