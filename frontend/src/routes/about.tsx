import styled from 'styled-components';
import {
  AboutHeader,
  Career,
  MySkills,
  Portfolio,
  Profile,
} from 'src/components/About';

export function About() {
  return (
    <AboutOuter>
      <AboutHeader />
      <Profile />
      <Career />
      <MySkills />
      <Portfolio />
    </AboutOuter>
  );
}

const AboutOuter = styled.div``;
