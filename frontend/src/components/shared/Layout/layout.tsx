/* Library */
import styled from 'styled-components';

import { Truncate } from 'src/util/truncate';

type Props = {
  content: JSX.Element;
  height: number;
  jc?: string;
  pt?: number;
  title: string;
};

export function AboutOuterLayout({ content, height, jc, pt, title }: Props) {
  const id = Truncate(title);
  const key = import.meta.env.ENV_IMAGE_URL;
  return (
    <AboutHeaderOuter height={height} pt={pt}>
      <TitleWrapper>
        <Title id={id}>{title}</Title>
        <img src={`${key}/marker.svg`} height={'20px'} />
      </TitleWrapper>
      <BodyWrapper jc={jc}>{content}</BodyWrapper>
    </AboutHeaderOuter>
  );
}

const AboutHeaderOuter = styled.div<{ height: number; pt?: number }>`
  align-items: center;
  background-color: var(--light-black-background-color);
  display: flex;
  flex-direction: column;
  height: ${({ height }) => `${height}px`};
  padding-top: ${({ pt }) => `${pt}px`};
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin-bottom: 2rem;
`;

const Title = styled.div`
  color: var(--white);
  display: flex;
  flex-direction: row;
  font-weight: bold;
  justify-content: center;
  position: relative;
  vertical-align: middle;
`;

const BodyWrapper = styled.div<{ gap?: number; jc?: string }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => (gap ? `${{ gap }}rem` : '2rem')};
  justify-content: ${({ jc }) => (jc ? jc : 'space-between')};
  width: 80%;
`;
