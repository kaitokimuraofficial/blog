/* Library */
import styled from 'styled-components';

/* Component */

export function AboutHeader() {
  const key = import.meta.env.ENV_IMAGE_URL

  return (
    <AboutHeaderOuter>
      <AboutHeaderWrapper>
        <Greeting />
        <Img src={`${key}/images/man-using-pc.svg`} />
      </AboutHeaderWrapper>
      <Img2 src={`${key}/images/wave-bg.svg`} />
    </AboutHeaderOuter>
  );
}

const AboutHeaderOuter = styled.div`
  background-color: var(--black-background-color);
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
`;

const AboutHeaderWrapper = styled.div`
  align-items: center;
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
      <h3>Hello World</h3>
      <h4>I'm Kaito Kimura</h4>
      <h4>College Student and Web Engineer</h4>
    </GreetingOuter>
  );
};

const GreetingOuter = styled.div`
  align-items: start;
  display: flex;
  padding-left: 2rem;
  flex-direction: column;
`;
