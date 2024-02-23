/* Library */
import styled from 'styled-components';

/* Component */
import { AboutOuterLayout } from 'cmp/shared';

const CareerBody = () => {
  return (
    <CareerBodyContent>
      <Waseda />
      <Torotaku />
      <Qiita />
    </CareerBodyContent>
  );
};

const props = {
  content: <CareerBody />,
  height: 600,
  title: 'Career',
};

export function Career() {
  return <AboutOuterLayout {...props} />;
}

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

const wasedaProp = {
  title: 'Waseda University',
  icon: 'images/icons/college.svg',
  body: 'Leverage agile frameworks to provide a robust \
  synopsis for high level overviews. Iterative approaches \
  to corporate strategy foster collaborative thinking to \
  further the overall value proposition.',
};

const Waseda = () => Element(wasedaProp);

const torotakuProp = {
  title: 'Waseda University',
  icon: 'images/icons/college.svg',
  body: 'Leverage agile frameworks to provide a robust \
  synopsis for high level overviews. Iterative approaches \
  to corporate strategy foster collaborative thinking to \
  further the overall value proposition.',
};

const Torotaku = () => Element(torotakuProp);

const qiitaProp = {
  title: 'Waseda University',
  icon: 'images/icons/college.svg',
  body: 'Leverage agile frameworks to provide a robust \
  synopsis for high level overviews. Iterative approaches \
  to corporate strategy foster collaborative thinking to \
  further the overall value proposition.',
};

const Qiita = () => Element(qiitaProp);
