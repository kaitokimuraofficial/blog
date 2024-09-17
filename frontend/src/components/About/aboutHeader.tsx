/* Library */
import styled from 'styled-components';

/* Component */
import { Text } from 'src/stories/Atoms/Text/text';

export function AboutHeader() {
  const key = import.meta.env.ENV_IMAGE_URL;

  return (
    <AboutHeaderOuter>
      <AboutHeaderWrapper>
        <Greeting />
        <img
          src={`${key}/man-using-pc.svg`}
          style={{ height: '300px', width: '300px' }}
        />
      </AboutHeaderWrapper>
      <img
        src={`${key}/wave-bg.svg`}
        style={{ width: '1000px', zIndex: 1000 }}
      />
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

const Greeting = () => {
  return (
    <GreetingOuter>
      <Text content="Hello World!" isBold={true} size="LARGE" />
      <Text content="I'm Kaito Kimura" isBold={true} size="LARGE" />
      <Text
        content="College Student and Software Engineer"
        isBold={true}
        size="LARGE"
      />
    </GreetingOuter>
  );
};

const GreetingOuter = styled.div`
  align-items: start;
  display: flex;
  padding-left: 2rem;
  flex-direction: column;
`;
