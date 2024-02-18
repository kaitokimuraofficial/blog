import styled from 'styled-components';

import FooterNavigation from './FooterNavigation';

const Footer = () => {
  return (
    <Outer>
      <FooterNavigation />
      <div></div>
    </Outer>
  );
};

export default Footer;

const Outer = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  height: '200px';
`;
