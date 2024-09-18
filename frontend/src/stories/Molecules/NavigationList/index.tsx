import styles from './navigationList.module.css';
import { Text } from 'src/stories/Atoms/Text';

type itemType = {
  key: string;
  url: string;
};

type Props = {
  title: string;
  items: itemType[];
};

export const NavigationList = ({ title, items }: Props) => {
  return (
    <div className={styles.container}>
      <Text content={title} isBold={true} size="LARGE" />
      <ul>
        {items.map((item) => (
          <li key={item.key} style={{ listStyle: 'none' }}>
            <a href={item.url}>{item.key}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
