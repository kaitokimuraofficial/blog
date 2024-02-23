/* Library */
import styled from 'styled-components';
import { useLoaderData } from 'react-router';

/* Component */
import {
  AboutHeader,
  Career,
  ContactMe,
  MySkills,
  Portfolio,
  Profile,
} from '../components/About';

export async function action() {}

export function About() {
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
