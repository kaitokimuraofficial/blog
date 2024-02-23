import styled from 'styled-components';

const FooterNavigation = () => {
  return (
    <Outer>
      <H1>Navigation</H1>
      <ul>
        <li>About</li>
        <li>Recent Article</li>
        <li>Skills</li>
        <li>Experience</li>
      </ul>
    </Outer>
  );
};

export default FooterNavigation;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const H1 = styled.h1``;
