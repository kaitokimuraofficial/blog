import styled from 'styled-components';

const Profile = () => {
  return (
    <ProfileOuter>
      <TitleWrapper>
        <Title id="profile">Profile</Title>
        <img src="images/marker.svg" height={'20px'} />
      </TitleWrapper>
    </ProfileOuter>
  );
};

export default Profile;

const ProfileOuter = styled.div`
  padding-top: 100px;
  height: 400px;
  width: 1000px;
  background-color: var(--light-black-background-color);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
