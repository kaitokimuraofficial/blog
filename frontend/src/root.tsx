import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Top } from './stories/Molecules/Top';
import { Footer } from './stories/Molecules/Footer';

export function Root() {
  return (
    <ContentContainer>
      <Top />
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
