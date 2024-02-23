/* Library */
import styled from 'styled-components';

export function MySkills() {
  return (
    <MySkillsOuter>
      <TitleWrapper>
        <Title id="myskills">My Skills</Title>
        <img src="images/marker.svg" height={'20px'} />
      </TitleWrapper>
    </MySkillsOuter>
  );
}

const MySkillsOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  background-color: var(--light-black-background-color);
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: middle;
  font-weight: bold;
  color: var(--white);
  position: relative;
`;
