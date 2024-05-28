/* Library */
import styled from 'styled-components';
import { useLoaderData } from 'react-router';

/* Component */
import { ArticleList, BlogHeader } from '@/components/Blog';

/* Types */
type ArticleProp = {
  title: string;
  body: string;
  created: Date;
  lastModified: Date;
};

export function Blogs() {
  const articles = useLoaderData() as ArticleProp[];

  console.log(articles);

  return (
    <BlogOuter>
      <BlogHeader />
      <ArticleList articles={articles} />
    </BlogOuter>
  );
}

const BlogOuter = styled.div``;
