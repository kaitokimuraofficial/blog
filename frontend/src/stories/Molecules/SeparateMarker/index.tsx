import styles from './separateMarker.module.css';
import { Truncate } from 'src/util/truncate';

type Prop = {
  title: string;
};

export const SeparateMarker = ({ title }: Prop) => {
  const id = Truncate(title);
  const key = import.meta.env.ENV_IMAGE_URL;

  return (
    <div className={styles.container}>
      <div className={styles.title} id={id}>
        {title}
      </div>
      <img src={`${key}/marker.svg`} height={'20px'} />
    </div>
  );
};
