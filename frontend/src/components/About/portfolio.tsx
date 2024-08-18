/* Library */
import styled from 'styled-components';

/* Component */
import { AboutOuterLayout } from '../shared';

export function Lists() {
  return <PortfolioElement />;
}

const props = {
  content: <Lists />,
  height: 600,
  title: 'Portfolio',
};

export function Portfolio() {
  return <AboutOuterLayout {...props} />;
}

const PortfolioElement = () => {
  return (
    <PortfolioElementOuter>
      <PortfolioElementHeader>This website</PortfolioElementHeader>
      <PortfolioElementBody>
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
        collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment. Thank you.
      </PortfolioElementBody>
    </PortfolioElementOuter>
  );
};

const PortfolioElementOuter = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 40%;
  border: 1px bold;
  border-color: black;
`;

const PortfolioElementHeader = styled.div`
  font-weight: bold;
  color: var(--white);
`;

const PortfolioElementBody = styled.div`
  font-weight: bold;
  color: var(--white);
`;
