/* Library */
import styled from 'styled-components';

import { convertToLowerCaseAndRemoveSpaces } from '@/util';

type Props = {
  content: JSX.Element;
  height: number;
  pt?: number;
  title: string;
};

export function AboutOuterLayout({ content, height, pt, title }: Props) {
  const id = convertToLowerCaseAndRemoveSpaces(title);
  return (
    <AboutHeaderOuter height={height} pt={pt}>
      <TitleWrapper>
        <Title id={id}>{title}</Title>
        <img src="images/marker.svg" height={'20px'} />
      </TitleWrapper>
      {content}
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
  width: 1000px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
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
