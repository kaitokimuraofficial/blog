import styled from 'styled-components';
import { Text } from 'src/stories/Atoms/Text';

export function AboutHeader() {
  const key = import.meta.env.ENV_IMAGE_URL;

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <TextWrapper>
          <Text content="Hello World!" isBold={true} size="LARGE" />
          <Text content="I'm Kaito Kimura" isBold={true} size="LARGE" />
          <Text
            content="College Student and Software Engineer"
            isBold={true}
            size="LARGE"
          />
        </TextWrapper>
        <img
          src={`${key}/man-using-pc.svg`}
          style={{ height: '300px', width: '300px' }}
        />
      </HeaderWrapper>
      <img
        src={`${key}/wave-bg.svg`}
        style={{ width: '1000px', zIndex: 1000 }}
      />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  background-color: var(--black-background-color);
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1000px;
`;

const TextWrapper = styled.div`
  align-items: start;
  display: flex;
  padding-left: 2rem;
  flex-direction: column;
`;
