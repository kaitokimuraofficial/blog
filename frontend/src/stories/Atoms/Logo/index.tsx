type Prop = {
  src: string;
  size?: 'LARGE' | 'NORMAL' | 'SMALL';
};

export const Logo = ({ src, size = 'NORMAL' }: Prop) => {
  const key = import.meta.env.ENV_IMAGE_URL;

  const length = size === 'LARGE' ? '48px' : size === 'SMALL' ? '36px' : '24px';

  return (
    <img src={`${key}/${src}`} style={{ width: length, height: length }} />
  );
};
