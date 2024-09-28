import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from 'src/components/shared/Header/header';
import { Footer } from 'src/stories/Molecules/Footer';

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
