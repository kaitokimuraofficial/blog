import { SubHeader } from 'src/stories/Molecules/SubHeader';
import { SectionUnit } from 'src/stories/Molecules/SectionUnit';
import { CardGrid } from 'src/stories/Molecules/CardGrid';
import { Portfolio } from 'src/stories/Molecules/Portfolio';
import { Profile } from 'src/stories/Molecules/Profile';

export const About = () => {
  return (
    <>
      <SubHeader />
      <Profile />
      <SectionUnit
        content={<CareerBody />}
        height={700}
        jc="center"
        title="Career"
      />
      <SectionUnit content={<SkillLists />} height={600} title="My Skills" />
      <Portfolio />
    </>
  );
};

const SkillLists = () => {
  const prop = [
    {
      title: 'Ruby',
      imgUrl: 'icons/ruby.svg',
      content: 'インターンでの開発経験があります。',
    },
    {
      title: 'Python',
      imgUrl: 'icons/python.svg',
      content: '競技プログラミングではPythonを使用しています。',
    },
    {
      title: 'TypeScript',
      imgUrl: 'icons/typescript.svg',
      content: 'インターンでの開発経験があります。',
    },
    {
      title: 'Golang',
      imgUrl: 'icons/golang.svg',
      content: 'このWebサイトのバックエンドをGoで実装しました。',
    },
  ];

  return <CardGrid cards={prop} />;
};

const CareerBody = () => {
  const prop = [
    {
      title: '東京都立西高等学校',
      imgUrl: 'icons/college.svg',
      content:
        'バスケットボール部所属運動会実行委員会。クラスマッチ実行委員会。運動会総団長。文化祭での映像制作にて文化祭大賞受賞。',
    },
    {
      title: '早稲田大学 基幹理工学部 情報理工学科',
      imgUrl: 'icons/college.svg',
      content:
        '「プロジェクト研究」制度を利用して、三年次から寺内研究室にて活動をしております。具体的な研究にはまだ着手できていませんが、現在はプログラムにおける型理論による検証や型推論の学習を通じて4年次の研究の知識の土台を作っております。',
    },
    {
      title: '株式会社 とろたく',
      imgUrl: 'icons/display.svg',
      content:
        'デスクトップでゲームをプレイしている時に表示される英語字幕をOCR技術によって読み取り日本語に翻訳するデスクトップアプリケーションをC#にて開発するプロジェクトにジョインしました。また、HTML・CSSを用いたサイト制作の業務にも携わりました。',
    },
    {
      title: 'Qiita',
      imgUrl: 'icons/display2.svg',
      content:
        '「エンジニアに関する知識を記録・共有するサービス」であるQiitaの開発業務にジョインしております。Ruby・TypeScriptを用いてフロントエンド・バックエンドをまたいだ保守・新機能追加のタスクを通じて日々成長しております。',
    },
  ];

  return <CardGrid cards={prop} />;
};
