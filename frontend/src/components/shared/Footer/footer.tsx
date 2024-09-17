import styled from 'styled-components';
import { FooterNavigationElement } from './footerNavigation';

export function Footer() {
  return (
    <FooterOuter>
      <NavigationOuter>
        <FooterNavigationElement
          title="Page Map"
          lists={[
            {
              key: 'About',
              url: '/about',
            },
            {
              key: 'Blog',
              url: '/blog',
            },
          ]}
        />
        <FooterNavigationElement
          title="Links"
          lists={[
            {
              key: 'GitHub',
              url: 'https://github.com/kaitokimuraofficial',
            },
            {
              key: 'LinkedIn',
              url: 'https://www.linkedin.com/in/kaito-kimura-03b88b21a/',
            },
            {
              key: 'X',
              url: 'https://x.com/Kai64054934',
            },
          ]}
        />
      </NavigationOuter>
      <LicenseWrapper>Made by @kaitokimuraofficial</LicenseWrapper>
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
