/* Library */
import styled from 'styled-components';

/* Component */
import { AboutOuterLayout } from 'cmp/shared';

const SkillLists = () => {
  return <p>Hello World</p>;
};

const props = {
  content: <SkillLists />,
  height: 400,
  title: 'My Skills',
};

export function MySkills() {
  return <AboutOuterLayout {...props} />;
}
