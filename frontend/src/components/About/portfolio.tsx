import styled from 'styled-components';
import { AboutOuterLayout } from '../shared';
import { Text } from 'src/stories/Atoms/Text';

export function Portfolio() {
  return (
    <AboutOuterLayout
      content={<PortfolioElement />}
      height={400}
      title="Portfolio"
    />
  );
}

const PortfolioElement = () => {
  return (
    <PortfolioElementOuter>
      <Text content="This website" isBold={true} />
      <Text
        content="バックエンドにGo,フロントエンドにTypeScriptを使用しています。
        クラウドサービスとしてAWSを使っており、Terraformでインフラを管理しています。
        このサイトのコードはアプリケーション部分が
        https://github.com/kaitokimuraofficial/blogで、
        インフラを管理しているTerraformのコードは
        https://github.com/kaitokimuraofficial/blog-infra です。"
        isBold={true}
      />
    </PortfolioElementOuter>
  );
};

const PortfolioElementOuter = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 80%;
  border: 1px bold;
  border-color: black;
`;
