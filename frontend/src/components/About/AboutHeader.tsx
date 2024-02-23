/* Library */
import styled from 'styled-components';

/* Component */
import { AboutOuterLayout } from 'cmp/shared';

export function AboutHeader() {
  return (
    <AboutHeaderOuter>
      <AboutHeaderWrapper>
        <Greeting />
        <Img src="images/man-using-pc.svg" />
      </AboutHeaderWrapper>
      <Img2 src="images/wave-bg.svg" />
    </AboutHeaderOuter>
  );
}

const AboutHeaderOuter = styled.div`
  background-color: var(--black-background-color);
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 1000px;
`;

const AboutHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1000px;
`;

const Img = styled.img`
  height: 300px;
  width: 300px;
`;

const Img2 = styled.img`
  width: 1000px;
  z-index: 1000;
`;

const Greeting = () => {
  return (
    <GreetingOuter>
      <H2>Hello World</H2>
      <H1>I'm Kaito Kimura</H1>
      <H2>College Student and Web Engineer</H2>
    </GreetingOuter>
  );
};

const GreetingOuter = styled.div`
  background-color: var(--black-background-color);
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
`;
