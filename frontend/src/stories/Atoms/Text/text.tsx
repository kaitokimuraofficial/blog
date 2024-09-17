import styles from './text.module.css';

type Prop = {
  content: string;
  isHighlighted?: boolean;
  isBold?: boolean;
  size?: 'LARGE' | 'NORMAL' | 'SMALL';
  color?: 'BLACK' | 'WHITE';
};

export const Text = ({
  content,
  isHighlighted = false,
  isBold = false,
  size = 'NORMAL',
  color = 'WHITE',
}: Prop) => {
  const classNames = [];

  if (isHighlighted) {
    classNames.push(styles.highlight);
  }

  if (isBold) {
    classNames.push(styles.bold);
  }

  const fontSize =
    size === 'LARGE' ? '24px' : size === 'SMALL' ? '12px' : '16px';

  const textColor =
    color === 'BLACK' ? 'var(--main-black-color)' : 'var(--main-white-color)';

  return (
    <p className={classNames.join(' ')} style={{ fontSize, color: textColor }}>
      {content}
    </p>
  );
};
