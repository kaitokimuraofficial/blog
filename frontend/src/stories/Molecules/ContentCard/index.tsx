import styles from './contentCard.module.css';
import { Logo } from 'src/stories/Atoms/Logo';
import { Text } from 'src/stories/Atoms/Text';

type Props = {
  content: string;
  imgUrl: string;
  title: string;
  color?: 'BLACK' | 'WHITE';
};

export const ContentCard = ({ content, imgUrl, title, color }: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleWrapper}>
        <Logo src={imgUrl} size="SMALL" />
        <Text content={title} isBold={true} size="LARGE" color={color} />
      </div>
      <div className={styles.contentWrapper}>
        <Text content={content} color={color} />
      </div>
    </div>
  );
};
