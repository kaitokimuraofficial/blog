import styles from './text.module.css';

type Prop = {
  content: string;
  isHighlighted?: boolean;
  isBold?: boolean;
  size?: 'LARGE' | 'NORMAL' | 'SMALL';
  color?: 'BLACK' | 'WHITE' | 'GRAY';
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

  let textColor = '';

  switch (color) {
    case 'BLACK':
      textColor = 'var(--main-black-color)';
      break;
    case 'GRAY':
      textColor = 'var(--main-gray-color)';
      break;
    default:
      textColor = 'var(--main-white-color)';
      break;
  }

  return (
    <p className={classNames.join(' ')} style={{ fontSize, color: textColor }}>
      {content}
    </p>
  );
};
