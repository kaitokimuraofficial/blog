import { AboutOuterLayout } from '../shared';
import { CardGrid } from 'src/stories/Molecules/CardGrid';

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

export function MySkills() {
  return (
    <AboutOuterLayout content={<SkillLists />} height={600} title="My Skills" />
  );
}
