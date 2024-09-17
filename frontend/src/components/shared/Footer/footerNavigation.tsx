/* Library */
import styled from 'styled-components';

type listType = {
  key: string;
  url: string;
};

type Props = {
  title: string;
  lists: listType[];
};

export function FooterNavigationElement({ title, lists }: Props) {
  return (
    <NavElementWrapper>
      <H1>{title}</H1>
      <ul>
        {lists.map((item) => (
          <li key={item.key} style={{ listStyle: 'none' }}>
            <a href={item.url}>{item.key}</a>
          </li>
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
