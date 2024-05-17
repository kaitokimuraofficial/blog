/* Library */
import styled from 'styled-components';

/* Component */
import { AboutOuterLayout } from 'cmp/shared';

const CareerBody = () => {
  return (
    <BodyWrapper>
      <HighSchool />
      <Waseda />
      <Torotaku />
      <Qiita />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: 20rem 20rem;
  grid-row: auto auto;
  grid-column-gap: 4.5rem;
  grid-row-gap: 4.5rem;
  justify-items: center;
`;

const props = {
  content: <CareerBody />,
  height: 700,
  jc: 'center',
  title: 'Career',
};

export function Career() {
  return <AboutOuterLayout {...props} />;
}

type ElementProps = {
  title: string;
  icon: string;
  body: string;
};

const Element = ({ title, icon, body }: ElementProps) => {
  return (
    <ElementOuter>
      <ElementHeader>
        <HeaderTitle>{title}</HeaderTitle>
        <Img src={icon} alt={title} />
      </ElementHeader>
      <ElementBody>{body}</ElementBody>
    </ElementOuter>
  );
};

const ElementOuter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: space-between;
`;

const ElementHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  vertical-align: middle;
`;

const HeaderTitle = styled.h2`
  color: var(--indigo);
  font-size: 1.5rem;
  font-weight: bold;
`;

const Img = styled.img`
  height: 2rem;
  width: 2rem;
`;

const ElementBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
`;

const key = import.meta.env.ENV_IMAGE_URL;

const highSchoolProp = {
  title: '東京都立西高等学校',
  icon: `${key}/images/icons/college.svg`,
  body: 'バスケットボール部所属運動会実行委員会\nクラスマッチ実行委員会\n運動会総団長\n文化祭での映像制作にて文化祭大賞受賞\n',
};

const wasedaProp = {
  title: '早稲田大学 基幹理工学部 情報理工学科',
  icon: `${key}/images/icons/college.svg`,
  body: '「プロジェクト研究」制度を利用して、三年次から寺内研究室にて活動をしております。具体的な研究にはまだ着手できていませんが、現在はプログラムにおける型理論による検証や型推論の学習を通じて4年次の研究の知識の土台を作っております。',
};

const torotakuProp = {
  title: '株式会社とろたく',
  icon: `${key}/images/icons/display.svg`,
  body: 'デスクトップでゲームをプレイしている時に表示される英語字幕をOCR技術によって読み取り日本語に翻訳するデスクトップアプリケーションをC#にて開発するプロジェクトにジョインしました。また、HTML・CSSを用いたサイト制作の業務にも携わりました。',
};

const qiitaProp = {
  title: 'Qiita',
  icon: `${key}/images/icons/display2.svg`,
  body: '「エンジニアに関する知識を記録・共有するサービス」であるQiitaの開発業務にジョインしております。Ruby・TypeScriptを用いてフロントエンド・バックエンドをまたいだ保守・新機能追加のタスクを通じて日々成長しております。',
};

const HighSchool = () => Element(highSchoolProp);
const Waseda = () => Element(wasedaProp);
const Torotaku = () => Element(torotakuProp);
const Qiita = () => Element(qiitaProp);
