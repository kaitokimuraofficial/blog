import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'src/components/shared';

export function Root() {
  return (
    <ContentContainer>
      <Header />
      <Outlet />
      <Footer />
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
