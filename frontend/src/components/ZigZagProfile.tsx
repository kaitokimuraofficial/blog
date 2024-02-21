import styled from 'styled-components';

const TimeLine = () => {
  return (
    <Zigzag>
      <ZigzagTimelineItem>
        <ZigzagTimelineMilestone />
        <ZigzagP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex eum
          possimus libero harum unde fugit hic itaque rerum labore doloribus
          sapiente maiores,
        </ZigzagP>
      </ZigzagTimelineItem>

      <ZigzagTimelineItem>
        <ZigzagTimelineMilestone />
        <ZigzagP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex eum
          possimus libero harum unde fugit hic itaque rerum labore doloribus
          sapiente maiores,
        </ZigzagP>
      </ZigzagTimelineItem>

      <ZigzagTimelineItem>
        <ZigzagTimelineMilestone />
        <ZigzagP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ex eum
          possimus libero harum unde fugit hic itaque rerum labore doloribus
          sapiente maiores,
        </ZigzagP>
      </ZigzagTimelineItem>
    </Zigzag>
  );
};

const Zigzag = styled.div`
  width: 1000px;
`;

const ZigzagTimelineItem = styled.div`
  position: relative;

  border-bottom: 1px solid #9ca3af;

  width: 100%;

  :nth-of-type(2n) {
    border-left: 1px solid #9ca3af;
    left: 0;
    transform: translate(-50%, -50%);
  }

  :nth-of-type(2n + 1) {
    border-right: 1px solid #9ca3af;
    right: 0;
    transform: translate(50%, -50%);
  }
`;

const ZigzagTimelineMilestone = styled.div`
  position: absolute;
  top: 50%;

  border-radius: 50%;
  height: 1rem;
  width: 1rem;

  background: #9ca3af;

  :nth-of-type(2n) {
    left: 0;
    transform: translate(-50%, -50%);
  }

  :nth-of-type(2n + 1) {
    right: 0;
    transform: translate(50%, -50%);
  }
`;

const ZigzagP = styled.p`
  margin: 0;
  padding: 10px;
`;
