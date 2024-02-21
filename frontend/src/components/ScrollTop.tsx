import styled, { css } from 'styled-components';

const ScrollTop = () => {
  return (
    <ImgOuter href="#root">
      <Img src="images/icons/arrow-up.svg" />
    </ImgOuter>
  );
};

export default ScrollTop;

const ImgOuter = styled.a`
  display: block;
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.5s ease-in;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const Img = styled.img`
  height: 25px;
  width: 25px;
`;
