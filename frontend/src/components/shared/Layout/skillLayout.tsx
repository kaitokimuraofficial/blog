/* Library */
import styled from 'styled-components';

type Props = {
  content: string;
  icon: string;
  title: string;
};

export function SkillsOuterLayout({ content, icon, title }: Props) {
  return (
    <SkillsOuter>
      <TitleWrapper>
        <img src={icon} height='3rem' width='3rem' />
        <H3>{title}</H3>
      </TitleWrapper>
      <H4>{content}</H4>
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
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const H3 = styled.h3`
  color: var(--black);
`;

const H4 = styled.h4`
  color: var(--black);
`;
