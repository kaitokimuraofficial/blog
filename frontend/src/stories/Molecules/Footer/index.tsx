import styles from './footer.module.css';
import { NavigationList } from 'src/stories/Molecules/NavigationList';
import { Text } from 'src/stories/Atoms/Text';

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.navContainer}>
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
      </div>
      <Text content="Made by @kaitokimuraofficial" isBold={true} color="GRAY" />
    </div>
  );
}
