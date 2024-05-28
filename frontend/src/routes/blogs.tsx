/* Library */
import styled from 'styled-components';
import { useLoaderData } from 'react-router';

/* Component */
import { ArticleList, BlogHeader } from '@/components/Blog';

export function Blogs() {
  const articles = useLoaderData() as any;

  return (
    <BlogOuter>
      <BlogHeader />
      <ArticleList articles={articles} />
    </BlogOuter>
  );
}

const BlogOuter = styled.div``;
