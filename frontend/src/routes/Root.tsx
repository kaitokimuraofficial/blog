/* Library */
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

/* Component */
import { Header, Footer, ScrollTop } from 'src/components/shared';

export function Root() {
  return (
    <ContentContainer>
      <Header />
      <Outlet />
      <Footer />
      <ScrollTop />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
`;
