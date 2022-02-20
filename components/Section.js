import styled from "styled-components";
import { Container } from "../style/global";
import { BsFilterLeft } from "react-icons/bs";
import Image from "next/image";

const SectWrap = styled.div`
  background: #292929;
`;

const Sect = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0px;
`;

const Left = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 30rem;
`;

const LeftList = styled.li`
  list-style: none;
  cursor: pointer;

  &:hover {
    color: #c5c5c5;
    transition: ease-in-out 0.4s;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  width: 4.5rem;
  align-items: center;
  cursor: pointer;
`;

const RightIcon = styled.div``;

const RightText = styled.p`
  padding-bottom: 6px;
`;
const MapContainer = styled.div`
  background: #171717;
  border-radius: 10px;
`;

const MapWrap = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;

const ForImage = styled.div``;

const OnLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40rem;
`;

const OnRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10rem;
`;

const ForSpan = styled.div`
  background-color: rgba(0, 0, 0, 0.56);
  padding: 8px;
  height: fit-content;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: ease-in-out 0.5s;
  }
`;

const Span = styled.span`
  font-size: 12px;
`;

const Location = styled.div``;

// const Ride = styled.p``;

// const Origin = styled.p``;

// const Path = styled.p``;

// const Date = styled.p``;

// const Url = styled.p``;

// const City = styled.p``;

const Details = styled.p`
  font-size: 15px;
  padding-bottom: 1rem;
`;

const DitSpan = styled.span`
  color: #d0cbcb;
`;

const Section = () => {
  return (
    <SectWrap>
      <Container>
        <Sect>
          <Left>
            <LeftList>Nearest rides</LeftList>
            <LeftList>Upcoming rides(4)</LeftList>
            <LeftList>Past rides(2)</LeftList>
          </Left>
          <Right>
            <RightIcon>
              <BsFilterLeft size={25} />
            </RightIcon>{" "}
            <RightText>Filter</RightText>
          </Right>
        </Sect>
        <MapContainer>
          <MapWrap>
            <OnLeft>
              <ForImage>
                <Image
                  src="/map.jpg"
                  width={296}
                  height={148}
                  alt="Map"
                  objectFit="fill"
                />
              </ForImage>
              <Location>
                {/* <Ride>Ride Id : 002</Ride>
                <Origin> Origin Station: 20</Origin>
                <Path>station_path</Path>
                <Date>Date: 164449243232</Date>
                <Url>url</Url>
                <City>Panvel</City> */}

                <Details>
                  <DitSpan>Ride Id:</DitSpan> 002
                </Details>
                <Details>
                  <DitSpan>Origin Station:</DitSpan>20
                </Details>
                <Details>
                  <DitSpan>station_path:</DitSpan>[20, 39, 40, 42, 54, 63, 72,
                  88, 98]
                </Details>
                <Details>
                  <DitSpan>date:</DitSpan>15th Feb 2022 16:33
                </Details>
                <Details>
                  <DitSpan>Distance:</DitSpan> 0
                </Details>
                {/* <Details>
                  <DitSpan>state:</DitSpan> Panvel
                </Details>
                <Details>
                  <DitSpan>city:</DitSpan> Panvel
                </Details> */}
              </Location>
            </OnLeft>
            <OnRight>
              <ForSpan>
                <Span>City Name</Span>
              </ForSpan>
              <ForSpan>
                <Span>State Name</Span>
              </ForSpan>
            </OnRight>
          </MapWrap>
        </MapContainer>
      </Container>
    </SectWrap>
  );
};

export default Section;
