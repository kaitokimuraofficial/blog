import styled from 'styled-components';

const Profile = () => {
  return (
    <ProfileOuter>
      <TitleWrapper>
        <Title id="profile">Profile</Title>
        <img src="images/marker.svg" height={'20px'} />
      </TitleWrapper>
      <ProfileWrapper>
        <Img src="images/profile.png" />
        <ProfileGreeting />
      </ProfileWrapper>
    </ProfileOuter>
  );
};

export default Profile;

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

const ProfileOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  height: 400px;
  width: 1000px;
  background-color: var(--light-black-background-color);
`;

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
