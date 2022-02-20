import styled from "styled-components";
import { Container } from "../style/global";
import { BsFilterLeft } from "react-icons/bs";
import Map from "./Map";

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

const rides = [
  {
    id: "001",
    origin_station_code: 23,
    station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
    destination_station_code: 93,
    date: 1644924365,
    map_url: "url",
    state: "Maharashtra",
    city: "Panvel",
  },
  {
    id: "002",
    origin_station_code: 20,
    station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
    destination_station_code: 98,
    date: 1644924365,
    map_url: "url",
    state: "Maharashtra",
    city: "Panvel",
  },
  {
    id: "003",
    origin_station_code: 13,
    station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91],
    destination_station_code: 91,
    date: 1644924365,
    map_url: "url",
    state: "Maharashtra",
    city: "Panvel",
  },
];

const Section = () => {
  const [filter, SetFilter] = useState(false);

  const filterClick = () => {
    SetFilter(!filter);
  };
  return (
    <SectWrap>
      <Container>
        <Sect>
          <Left>
            <LeftList>Nearest rides</LeftList>
            <LeftList>Upcoming rides(4)</LeftList>
            <LeftList>Past rides(2)</LeftList>
          </Left>
          <Right onClick={filterClick}>
            <RightIcon>
              <BsFilterLeft size={25} />
            </RightIcon>{" "}
            <RightText>Filter</RightText>
          </Right>
        </Sect>
        {rides.map(
          ({
            id,
            origin_station_code,
            station_path,
            destination_station_code,
            date,
            map_url,
            state,
            city,
          }) => (
            // eslint-disable-next-line react/jsx-key
            <Map
              id={id}
              origin_station_code={origin_station_code}
              station_path={station_path}
              destination_station_code={destination_station_code}
              date={date}
              map_url={map_url}
              state={state}
              city={city}
            />
          )
        )}
      </Container>
    </SectWrap>
  );
};

export default Section;
