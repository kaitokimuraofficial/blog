import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterOuter>
      <NavigationOuter>
        <FooterNavigation />
        <FooterContact />
      </NavigationOuter>
      <License />
    </FooterOuter>
  );
};

export default Footer;

const FooterNavigation = () => {
  return (
    <NavElementWrapper>
      <H1>Navigation</H1>
      <ul>
        <Li>About</Li>
        <Li>Recent Article</Li>
      </ul>
    </NavElementWrapper>
  );
};

const FooterContact = () => {
  return (
    <NavElementWrapper>
      <H1>Contact</H1>
      <ul>
        <Li>GitHub</Li>
        <Li>LinkedIn</Li>
        <Li>Twitter</Li>
        <Li>Email</Li>
      </ul>
    </NavElementWrapper>
  );
};

const License = () => {
  return <LicenseWrapper>Made by @kaitokimuraofficial</LicenseWrapper>;
};

const FooterOuter = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;

const NavigationOuter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: left;
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

const NavElementWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  height: '300px';
`;

const LicenseWrapper = styled.div`
  color: gray;
  display: flex;
  font-weight: bold;
  height: 20px;
  justify-content: center;
`;
