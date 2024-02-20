import styled from 'styled-components';

const Header = () => {
  return (
    <Outer>
      <Title>Kai BLOG</Title>

      <Right>
        <ColumnLeft>
          <A href="/">
            <p>Blog</p>
          </A>
          <A href="/about">
            <p>About</p>
          </A>
        </ColumnLeft>
        <ColumnRight>
          <A href="https://github.com/kaitokimuraofficial" target="blank">
            <Img src="public/github.svg" />
          </A>
          <A
            href="https://www.linkedin.com/in/kaito-kimura-03b88b21a/"
            target="blank"
          >
            <Img src="public/Linkedin.svg" />
          </A>
        </ColumnRight>
      </Right>
    </Outer>
  );
};

export default Header;

const Outer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 1000px;
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

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 150px;
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 20px;
  width: 150px;
`;

const Img = styled.img`
  height: 25px;
  width: 25px;
`;

const A = styled.a`
  color: gray;
  font-weight: bold;

  :hover {
    color: white;
    cursor: pointer;
  }
`;
