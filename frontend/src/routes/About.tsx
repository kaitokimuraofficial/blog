import styled from 'styled-components';
import { useLoaderData } from 'react-router';

import AboutHeader from '../components/About/AboutHeader';
import Career from '../components/About/Career';
import ContactMe from '../components/About/ContactMe';
import MySkills from '../components/About/MySkills';
import Portfolio from '../components/About/Portfolio';
import Profile from '../components/About/Profile';

export default function About() {
  const data = useLoaderData() as any;
  console.log(data.movies.greeting);

  return (
    <AboutOuter>
      <AboutHeader />
      <Profile />
      <Career />
      <MySkills />
      <Portfolio />
      <ContactMe />
    </AboutOuter>
  );
}

const AboutOuter = styled.div``;
