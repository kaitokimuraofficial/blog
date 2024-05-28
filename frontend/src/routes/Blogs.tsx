/* Library */
import styled from 'styled-components';
import { useLoaderData } from 'react-router-dom';

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

  return (
    <BlogOuter>
      <BlogHeader />
      <ArticleList articles={articles} />
    </BlogOuter>
  );
}

const BlogOuter = styled.div``;
