/* Library */
import styled from 'styled-components';

/* Component */
import { AboutOuterLayout } from '../shared';

export function Lists() {
  return <PortfolioElement />;
}

const props = {
  content: <Lists />,
  height: 600,
  title: 'Portfolio',
};

export function Portfolio() {
  return <AboutOuterLayout {...props} />;
}

const PortfolioElement = () => {
  return (
    <PortfolioElementOuter>
      <PortfolioElementHeader>This website</PortfolioElementHeader>
      <PortfolioElementBody>
        バックエンドにGo,フロントエンドにTypeScriptを使用しています。
        クラウドサービスとしてAWSを使っており、Terraformでインフラを管理しています。
        このサイトのコードはアプリケーション部分が https://github.com/kaitokimuraofficial/blog で、
        インフラを管理しているTerraformのコードは https://github.com/kaitokimuraofficial/blog-infra です。
      </PortfolioElementBody>
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

const PortfolioElementHeader = styled.div`
  font-weight: bold;
  color: var(--white);
`;

const PortfolioElementBody = styled.div`
  font-weight: bold;
  color: var(--white);
`;
