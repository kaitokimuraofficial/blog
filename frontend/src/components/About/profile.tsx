import styled from 'styled-components';
import { AboutOuterLayout } from '../shared';
import { Text } from 'src/stories/Atoms/Text';

export function Base() {
  const key = import.meta.env.ENV_IMAGE_URL;

  return (
    <>
      <Img src={`${key}/profile.png`} />
      <ProfileGreeting />
    </>
  );
}

const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 20px;

  @media (max-width: 600px) {
    height: 100px;
    width: 100px;
  }
`;

const props = {
  content: <Base />,
  height: 500,
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

const ProfileGreeting = () => {
  return (
    <ProfileGreetingOuter>
      <Text content="I'm Kaito Kimura" isBold={true} size="LARGE" />
      <Text
        content="千葉県生まれ。5才の頃に札幌に引越しする。中学2年生のとき東京に再度引越し、
        今も東京ライフを満喫している。一浪を経て、早稲田大学でCSを勉強中。
        友達から勧めれた競技プログラミングをきっかけにプログラミングの勉強を本格的に始める。
        転機は2023年の夏休み。参加したハッカソンにて本格的にエンジニアとしてキャリアを歩むことを決め、
        暇さえあればパソコンで何かを作ってる。
        趣味はスポーツ観戦(バスケ、アメフト)、サイクリング、音楽、英語、YouTube、散歩。"
      />
    </ProfileGreetingOuter>
  );
};
