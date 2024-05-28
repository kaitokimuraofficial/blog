/* Library */
import styled from 'styled-components';
import { FooterNavigationElement } from './footerNavigation';

// import { useTranslator } from '../../../hooks';

// const t = useTranslator('AboutHeader');

// console.log(t('title'));

export function Footer() {
  return (
    <FooterOuter>
      <NavigationOuter>
        <FooterNavigation />
        <FooterContact />
      </NavigationOuter>
      <License />
    </FooterOuter>
  );
}

const FooterOuter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--light-black-background-color);
`;

const NavigationOuter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: left;
`;

const LicenseWrapper = styled.div`
  color: gray;
  display: flex;
  font-weight: bold;
  height: 20px;
  justify-content: center;
`;

const Navigation = {
  title: 'Navigation',
  lists: ['About', 'Blogs'],
};

const Contact = {
  title: 'Contact',
  lists: ['GitHub', 'LinkedIn', 'X', 'Email'],
};

const FooterContact = () => FooterNavigationElement(Contact);
const FooterNavigation = () => FooterNavigationElement(Navigation);

const License = () => {
  return <LicenseWrapper>Made by @kaitokimuraofficial</LicenseWrapper>;
};
