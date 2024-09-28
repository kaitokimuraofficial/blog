import styled from 'styled-components';
import { Logo } from 'src/stories/Atoms/Logo';
import { Text } from 'src/stories/Atoms/Text';

import styles from './top.module.css';

export const Top = () => {
  return (
    <Outer>
      <Title>Kai BLOG</Title>
      <Column>
        <a className={styles.link} href="/about" target="_top">
          <Text content={'About'} isBold={true} size="LARGE" />
        </a>
        <a className={styles.link} href="/blog" target="_top">
          <Text content={'Blog'} isBold={true} size="LARGE" />
        </a>
      </Column>
      <Column>
        <a href="https://github.com/kaitokimuraofficial" target="_blank">
          <Logo src={'icons/github.svg'} size="LARGE" />
        </a>
        <a
          href="https://www.linkedin.com/in/kaito-kimura-03b88b21a/"
          target="_blank"
        >
          <Logo src={'icons/linkedin.svg'} size="LARGE" />
        </a>
      </Column>
    </Outer>
  );
};

const Outer = styled.div`
  align-items: center;
  background-color: var(--black-background-color);
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 30px 0px;
  width: 100%;

  @media (max-width: 600px) {
    height: 100px;
  }
`;

const Title = styled.h1`
  text-align: center;
  padding-left: 2rem;
  font-weight: bold;
`;

const Column = styled.div`
  display: flex;
  gap: 2rem;
  width: 150px;
  justify-content: space-between;
`;
