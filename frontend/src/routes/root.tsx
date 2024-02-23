import styled from 'styled-components';

import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollTop from '../components/ScrollTop';

export default function Root() {
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
