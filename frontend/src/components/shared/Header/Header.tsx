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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 1000px;
  background-color: var(--black-background-color);
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  justify-content: space-around;
`;

const ColumnRight = styled(Column)`
  justify-content: flex-end;
`;
