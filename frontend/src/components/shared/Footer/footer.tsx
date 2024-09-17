import styled from 'styled-components';
import { NavigationList } from 'src/stories/Molecules/NavigationList';
import { Text } from 'src/stories/Atoms/Text';

export function Footer() {
  return (
    <FooterOuter>
      <NavigationOuter>
        <NavigationList
          title="Page Map"
          items={[
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
        <NavigationList
          title="Links"
          items={[
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
      <Text content="Made by @kaitokimuraofficial" isBold={true} color="GRAY" />
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
`;
