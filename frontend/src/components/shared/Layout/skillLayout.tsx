import styled from 'styled-components';
import { Logo } from 'src/stories/Atoms/Logo';
import { Text } from 'src/stories/Atoms/Text';

type Props = {
  content: string;
  imgUrl: string;
  title: string;
};

export function SkillsOuterLayout({ content, imgUrl, title }: Props) {
  return (
    <SkillsOuter>
      <TitleWrapper>
        <Logo src={imgUrl} size="SMALL" />
        <Text content={title} isBold={true} size="LARGE" />
      </TitleWrapper>
      <Text content={content} />
    </SkillsOuter>
  );
}

const SkillsOuter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;
`;
