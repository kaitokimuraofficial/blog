import styled from 'styled-components';
import { AboutOuterLayout } from '../shared';
import { ContentCard } from 'src/stories/Molecules/ContentCard';

const CareerBody = () => {
  return (
    <BodyWrapper>
      <ContentCard
        title="東京都立西高等学校"
        imgUrl="icons/college.svg"
        content="バスケットボール部所属運動会実行委員会。
        クラスマッチ実行委員会。
        運動会総団長。
        文化祭での映像制作にて文化祭大賞受賞。"
      />
      <ContentCard
        title="早稲田大学 基幹理工学部 情報理工学科"
        imgUrl="icons/college.svg"
        content="「プロジェクト研究」制度を利用して、
        三年次から寺内研究室にて活動をしております。
        具体的な研究にはまだ着手できていませんが、
        現在はプログラムにおける型理論による検証や
        型推論の学習を通じて4年次の研究の知識の土台を作っております。"
      />
      <ContentCard
        title="株式会社 とろたく"
        imgUrl="icons/display.svg"
        content="デスクトップでゲームをプレイしている時に
        表示される英語字幕をOCR技術によって読み取り
        日本語に翻訳するデスクトップアプリケーションを
        C#にて開発するプロジェクトにジョインしました。
        また、HTML・CSSを用いたサイト制作の業務にも携わりました。"
      />
      <ContentCard
        title="Qiita"
        imgUrl="icons/display2.svg"
        content="「エンジニアに関する知識を記録・共有するサービス」
        であるQiitaの開発業務にジョインしております。
        Ruby・TypeScriptを用いてフロントエンド・バックエンドをまたいだ
        保守・新機能追加のタスクを通じて日々成長しております。"
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
