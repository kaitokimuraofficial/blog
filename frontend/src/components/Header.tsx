import styled from 'styled-components';

const Header = () => {
  return (
    <Outer>
      <img src="public/github.svg" />
      <img src="public/Linkedin.svg" />
    </Outer>
  );
};

export default Header;

const Outer = styled.div`
  display: flex;
  flex-direction: row;
`;
