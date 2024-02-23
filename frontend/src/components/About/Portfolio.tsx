/* Library */
import styled from 'styled-components';

export function Portfolio() {
  return (
    <PortfolioOuter>
      <TitleWrapper>
        <Title id="portfolio">Portfolio</Title>
        <img src="images/marker.svg" height={'20px'} />
      </TitleWrapper>
      <PortfolioWrapper>
        <PortfolioElement />
      </PortfolioWrapper>
    </PortfolioOuter>
  );
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
        workplace diversity and empowerment.
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

const PortfolioOuter = styled.div`
  background-color: var(--light-black-background-color);
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 1000px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: middle;
  font-weight: bold;
  color: var(--white);
  position: relative;
`;

const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
