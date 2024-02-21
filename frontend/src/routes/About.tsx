import styled from 'styled-components';
import { useLoaderData } from 'react-router';

import AboutHeader from '../components/AboutHeader';
import Profile from '../components/Profile';
import Education from '../components/Education';
import MySkills from '../components/MySkills';
import Portfolio from '../components/Portfolio';
import ContactMe from '../components/ContactMe';

export default function About() {
  const data = useLoaderData() as any;
  console.log(data.movies.greeting);

  return (
    <AboutOuter>
      <AboutHeader />
      <Profile />
      <Education />
      <MySkills />
      <Portfolio />
      <ContactMe />
    </AboutOuter>
  );
}

const AboutOuter = styled.div``;
