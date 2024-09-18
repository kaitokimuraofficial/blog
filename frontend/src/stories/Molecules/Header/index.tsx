import styles from './header.module.css';
import { Text } from 'src/stories/Atoms/Text';

export const Header = () => {
  const key = import.meta.env.ENV_IMAGE_URL;

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.textWrapper}>
          <Text content="Hello World!" isBold={true} size="LARGE" />
          <Text content="I'm Kaito Kimura" isBold={true} size="LARGE" />
          <Text
            content="College Student and Software Engineer"
            isBold={true}
            size="LARGE"
          />
        </div>
        <img
          src={`${key}/man-using-pc.svg`}
          style={{ height: '300px', width: '300px' }}
        />
      </div>
      <img
        src={`${key}/wave-bg.svg`}
        style={{ width: '1000px', zIndex: 1000 }}
      />
    </div>
  );
};
