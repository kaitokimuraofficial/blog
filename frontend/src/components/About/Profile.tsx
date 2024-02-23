/* Library */
import styled from 'styled-components';

/* Component */
import { AboutOuterLayout } from 'cmp/shared';

export function Base() {
  return (
    <ProfileWrapper>
      <Img src="images/profile.png" />
      <ProfileGreeting />
    </ProfileWrapper>
  );
}

const props = {
  content: <Base />,
  height: 600,
  pt: 100,
  title: 'Profile',
};

export function Profile() {
  return <AboutOuterLayout {...props} />;
}

const ProfileGreetingOuter = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: top;
`;

const ProfileGreetingTitle = styled.h1`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 20px;
  color: var(--white);
`;
const ProfileGreetingBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileGreetingBodyElement = styled.p`
  color: var(--white);
`;

const ProfileGreeting = () => {
  return (
    <ProfileGreetingOuter>
      <ProfileGreetingTitle>I'm Kaito Kimura</ProfileGreetingTitle>
      <ProfileGreetingBody>
        <ProfileGreetingBodyElement>
          I am passionate about UI/UX design and Web Design. I am a skilled
          front-end developer and master of graphic design tools such as
          Photoshop and Sketch. I am a quick learner and a team worker that gets
          the job done. I can easily capitalize on low hanging fruits and
          quickly maximize timely deliverables for real-time schemas.
        </ProfileGreetingBodyElement>
      </ProfileGreetingBody>
    </ProfileGreetingOuter>
  );
};

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 20px;
`;
