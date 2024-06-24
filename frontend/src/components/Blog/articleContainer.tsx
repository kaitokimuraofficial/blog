import { Link } from 'react-router-dom';

type Prop = {
  title: string;
  id: number;
};

export function ArticleContainer({ title, id }: Prop) {
  return (
    <Link to={`articles/${id}`}>
      <div>
        <h1>{title}</h1>
        <h1>{id}</h1>
      </div>
    </Link>
  );
}
