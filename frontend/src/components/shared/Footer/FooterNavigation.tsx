/* Library */
import styled from 'styled-components';

type Props = {
  title: string;
  lists: string[];
};

export function FooterNavigationElement({ title, lists }: Props) {
  return (
    <NavElementWrapper>
      <H1>{title}</H1>
      <ul>
        {lists.map((list) => (
          <Li key={list}>{list}</Li>
        ))}
      </ul>
    </NavElementWrapper>
  );
}

const NavElementWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  height: '300px';
`;


const H1 = styled.h1`
  color: gray;
  font-size: 25px;
  margin: 0;
  padding-left: 20px;
`;

const Li = styled.li`
  list-style: none;
`;
