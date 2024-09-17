/* Library */
import styled from 'styled-components';

/* Component */
import { AboutOuterLayout } from '../shared';
import { Logo } from 'src/stories/Atoms/Logo';
import { Text } from 'src/stories/Atoms/Text';

const CareerBody = () => {
  return (
    <BodyWrapper>
      <Element
        title="東京都立西高等学校"
        imgUrl="icons/college.svg"
        body="バスケットボール部所属運動会実行委員会。
        クラスマッチ実行委員会。
        運動会総団長。
        文化祭での映像制作にて文化祭大賞受賞。"
      />
      <Element
        title="早稲田大学 基幹理工学部 情報理工学科"
        imgUrl="icons/college.svg"
        body="「プロジェクト研究」制度を利用して、三年次から寺内研究室にて活動をしております。具体的な研究にはまだ着手できていませんが、現在はプログラムにおける型理論による検証や型推論の学習を通じて4年次の研究の知識の土台を作っております。"
      />
      <Element
        title="株式会社 とろたく"
        imgUrl="icons/display.svg"
        body="デスクトップでゲームをプレイしている時に表示される英語字幕をOCR技術によって読み取り日本語に翻訳するデスクトップアプリケーションをC#にて開発するプロジェクトにジョインしました。また、HTML・CSSを用いたサイト制作の業務にも携わりました。"
      />
      <Element
        title="Qiita"
        imgUrl="icons/display2.svg"
        body="「エンジニアに関する知識を記録・共有するサービス」であるQiitaの開発業務にジョインしております。Ruby・TypeScriptを用いてフロントエンド・バックエンドをまたいだ保守・新機能追加のタスクを通じて日々成長しております。"
      />
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
  imgUrl: string;
  body: string;
};

const Element = ({ title, imgUrl, body }: ElementProps) => {
  return (
    <ElementOuter>
      <ElementHeader>
        <Text content={title} isBold={true} />
        <Logo src={imgUrl} size="LARGE" />
      </ElementHeader>
      <Text content={body} />
    </ElementOuter>
  );
};

const ElementOuter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ElementHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  vertical-align: middle;
`;
