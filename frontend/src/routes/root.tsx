/* Library */
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

/* Component */
import { Header, Footer, ScrollTop } from '../components/shared';

export function Root() {
  //   const res = load();

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
`;
