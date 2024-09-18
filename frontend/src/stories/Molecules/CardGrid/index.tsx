import { ContentCard } from '../ContentCard';
import styles from './cardGrid.module.css';

type CardType = {
  title: string;
  imgUrl: string;
  content: string;
};

type Prop = {
  cards: CardType[];
};

export const CardGrid = ({ cards }: Prop) => {
  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <ContentCard
          key={index}
          content={card.content}
          imgUrl={card.imgUrl}
          title={card.title}
        />
      ))}
    </div>
  );
};
