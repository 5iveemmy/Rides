import Image from "next/image";
import styled from "styled-components";

//Styled Components

const MapContainer = styled.div`
  background: #171717;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const MapWrap = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;

const ForImage = styled.div`
  display: flex;
  & img {
    border-radius: 5px;
  }
`;

const OnLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 37rem;
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

const Details = styled.p`
  font-size: 15px;
  padding-bottom: 1rem;
`;

const DitSpan = styled.span`
  color: #d0cbcb;
`;

const Span = styled.span`
  font-size: 12px;
`;

const Location = styled.div``;

const Map = ({
  id,
  origin_station_code,
  station_path,
  destination_station_code,
  date,
  map_url,
  state,
  city,
}) => {
  return (
    <MapContainer>
      <MapWrap>
        <OnLeft>
          <ForImage>
            <Image
              src="/map.jpg"
              width={296}
              height={148}
              alt="Map"
              objectFit="cover"
            />
          </ForImage>
          <Location>
            <Details>
              <DitSpan>Ride Id:</DitSpan> {id}
            </Details>
            <Details>
              <DitSpan>Origin Station:</DitSpan>
              {origin_station_code}
            </Details>
            <Details>
              <DitSpan>Station_path:</DitSpan>
              {station_path}
            </Details>
            <Details>
              <DitSpan>Station_code:</DitSpan>
              {destination_station_code}
            </Details>
            <Details>
              <DitSpan>Date:</DitSpan>
              {date}
            </Details>
            <Details>
              <DitSpan>Url:</DitSpan>
              {map_url}
            </Details>
            <Details>
              <DitSpan>State:</DitSpan>
              {state}
            </Details>
            <Details>
              <DitSpan>City:</DitSpan>
              {city}
            </Details>
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
  );
};

export default Map;
