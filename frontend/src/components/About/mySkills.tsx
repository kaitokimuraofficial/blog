/* Library */
import styled from 'styled-components';

/* Component */
import { AboutOuterLayout, SkillsOuterLayout } from '../shared';

const SkillLists = () => {
  return (
    <SkillOuter>
      <SkillsOuterLayout
        content="インターンでの開発経験があります。"
        imgUrl="icons/ruby.svg"
        title="Ruby"
      />
      <SkillsOuterLayout
        content="競技プログラミングではPythonを使用しています。"
        imgUrl="icons/python.svg"
        title="Python"
      />
      <SkillsOuterLayout
        content="インターンでの開発経験があります。"
        imgUrl="icons/typescript.svg"
        title="TypeScript"
      />
      <SkillsOuterLayout
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
  grid-row-gap: 4.5rem;
  justify-items: center;
`;

const props = {
  content: <SkillLists />,
  height: 600,
  title: 'My Skills',
};

export function MySkills() {
  return <AboutOuterLayout {...props} />;
}
