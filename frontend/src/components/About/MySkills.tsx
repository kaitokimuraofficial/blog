/* Library */
import styled from 'styled-components';

/* Component */
import { AboutOuterLayout, SkillsOuterLayout } from '../shared';

const SkillLists = () => {
  return (
    <SkillOuter>
      <Ruby />
      <Python />
      <TypeScript />
      <Golang />
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

const key = import.meta.env.ENV_IMAGE_URL;

const rubyProp = {
  title: 'Ruby',
  content: 'Qiitaにてrubyでの開発経験があります。',
  icon: `${key}/images/icons/ruby.svg`,
};

const Ruby = () => SkillsOuterLayout(rubyProp);

const pythonProp = {
  title: 'Python',
  content: '競技プログラミングではPythonを使用しています',
  icon: `${key}/images/icons/python.svg`,
};

const Python = () => SkillsOuterLayout(pythonProp);

const typeScriptProp = {
  title: 'TypeScript',
  content: 'このブログのフロントもTypeScriptで書きました',
  icon: `${key}/images/icons/typescript.svg`,
};

const TypeScript = () => SkillsOuterLayout(typeScriptProp);

const golangProp = {
  title: 'Golang',
  content: 'このブログもGo言語で書きました',
  icon: `${key}/images/icons/golang.svg`,
};

const Golang = () => SkillsOuterLayout(golangProp);

const props = {
  content: <SkillLists />,
  height: 600,
  title: 'My Skills',
};

export function MySkills() {
  return <AboutOuterLayout {...props} />;
}
