/* Library */
import styled from 'styled-components';

/* Component */
import { Blog, About, GH, LinkedIn } from '.';

export function Header() {
  return (
    <Outer>
      <Title>Kai BLOG</Title>
      <Right>
        <ColumnLeft>
          <Blog />
          <About />
        </ColumnLeft>
        <ColumnRight>
          <GH />
          <LinkedIn />
        </ColumnRight>
      </Right>
    </Outer>
  );
}

const Outer = styled.div`
  align-items: center;
  background-color: var(--black-background-color);
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
  padding: 30px 0px;
  width: 100%;

  @media (max-width: 600px) {
    height: 100px;
  }
`;

const Title = styled.h1`
  text-align: center;
  padding-left: 2rem;
  font-weight: bold;
  line-height: 100%;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

const Column = styled.div<{ align?: string; gap?: number }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ align }) =>
    align === 'right' ? 'flex-end' : 'space-around'};
  gap: ${({ gap }) => gap || '0'}px;
  width: 150px;
`;

const ColumnLeft = styled(Column)`
  justify-content: space-between;
  gap: 2rem;
`;

const ColumnRight = styled(Column)`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-right: 1rem;
`;
