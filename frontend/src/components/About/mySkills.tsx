import styled from 'styled-components';
import { AboutOuterLayout } from '../shared';
import { ContentCard } from 'src/stories/Molecules/ContentCard';

const SkillLists = () => {
  return (
    <SkillOuter>
      <ContentCard
        content="インターンでの開発経験があります。"
        imgUrl="icons/ruby.svg"
        title="Ruby"
      />
      <ContentCard
        content="競技プログラミングではPythonを使用しています。"
        imgUrl="icons/python.svg"
        title="Python"
      />
      <ContentCard
        content="インターンでの開発経験があります。"
        imgUrl="icons/typescript.svg"
        title="TypeScript"
      />
      <ContentCard
        content="このWebサイトのバックエンドをGoで実装しました。"
        imgUrl="icons/golang.svg"
        title="Golang"
      />
    </SkillOuter>
  );
};

const SkillOuter = styled.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: 20rem 20rem;
  grid-row: auto auto;
  grid-column-gap: 4.5rem;
  grid-row-gap: 2rem;
  justify-items: center;
`;

export function MySkills() {
  return (
    <AboutOuterLayout content={<SkillLists />} height={600} title="My Skills" />
  );
}
