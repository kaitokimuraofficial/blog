/* Library */
import styled from 'styled-components';
import { useLoaderData } from 'react-router';

export function Blogs() {
  const data = useLoaderData() as any;
  console.log(data);

  return <P>{data.movies.greeting}</P>;
}

const P = styled.p`
  height: 100px;
  color: blue;
`;
