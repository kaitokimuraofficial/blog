import styled from 'styled-components';
import { SeparateMarker } from 'src/stories/Molecules/SeparateMarker';

type Props = {
  content: JSX.Element;
  height: number;
  jc?: string;
  pt?: number;
  title: string;
};

export function AboutOuterLayout({ content, height, jc, pt, title }: Props) {
  return (
    <AboutHeaderOuter height={height} pt={pt}>
      <SeparateMarker title={title} />
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

const BodyWrapper = styled.div<{ gap?: number; jc?: string }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => (gap ? `${{ gap }}rem` : '2rem')};
  justify-content: ${({ jc }) => (jc ? jc : 'space-between')};
  width: 80%;
`;
