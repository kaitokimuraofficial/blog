import styled from 'styled-components';

const Career = () => {
  return (
    <CareerOuter>
      <TitleWrapper>
        <Title id="career">Career</Title>
        <img src="images/marker.svg" height={'20px'} />
      </TitleWrapper>
      <CareerBody />
    </CareerOuter>
  );
};

export default Career;

const CareerOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  background-color: var(--light-black-background-color);
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
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

const CareerBody = () => {
  return (
    <CareerBodyContent>
      <Element></Element>
    </CareerBodyContent>
  );
};

const CareerBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

type ElementProps = {
  title: string;
  icon: string;
  body: string;
};

const Element = ({ title, icon, body }: ElementProps) => {
  return (
    <ElementOuter>
      <ElementHeader>
        <HeaderTitle>{title}</HeaderTitle>
        <Img src={icon} alt={title} />
      </ElementHeader>
      <ElementBody>{body}</ElementBody>
    </ElementOuter>
  );
};

const ElementOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ElementHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: middle;
`;

const HeaderTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: var(--indigo);
`;

const Img = styled.img`
  height: 20px;
  width: 20px;
`;

const ElementBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;
`;
