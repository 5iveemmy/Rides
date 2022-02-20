import styled from "styled-components";
import { Container } from "../style/global";
import { BsFilterLeft } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import Map from "./Map";
import { useState } from "react";

const SectWrap = styled.div`
  background: #292929;
`;

const Pad = styled.div`
  padding-bottom: 50px;
`;

const Sect = styled.div`
  display: flex;
  justify-content: space-between;
  /* color: #d0cbcb; */
  padding: 2rem 0px;
  font-size: 18px;
`;

const Left = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  font-size: 18px;
`;

const LeftList = styled.li`
  color: ${({ boldColor }) => (boldColor ? "#fff" : "#d0cbcb")};
  border-bottom: ${({ under }) => (under ? "solid 2px" : "none")};
  list-style: none;
  cursor: pointer;

  &:hover {
    color: #fff;
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

const Arrow = styled.div``;

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

const ShowFilter = styled.div`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #101010;
  padding: 20px;
  border-radius: 10px;
  right: 1rem;
  top: 10rem;
`;

const ShowFilterWrap = styled.div`
  padding: 10px;
  width: 11rem;
`;

const FiltersDiv = styled.div`
  padding-bottom: 10px;
`;

const Filters = styled.p`
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
  text-align: center;
`;

const FiltersTextWrap = styled.div`
  background-color: #232323;
  padding: 10px;
  margin-bottom: 10px;
`;

const FiltersText = styled.p`
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Section = () => {
  const [user] = useState({
    station_code: 40,
    name: "Dhruv Singh",
    profile_key: "url",
  });
  const [click, setClick] = useState(false);
  const filterClick = () => {
    setClick(!click);
  };

  return (
    <SectWrap>
      <Pad>
        <Container>
          <Sect>
            <Left>
              <LeftList boldColor under>
                Nearest rides
              </LeftList>
              <LeftList>Upcoming rides(4)</LeftList>
              <LeftList>Past rides(2)</LeftList>
            </Left>
            <Right onClick={filterClick}>
              <RightIcon>
                <BsFilterLeft size={25} />
              </RightIcon>{" "}
              <RightText>Filter</RightText>
            </Right>
            <ShowFilter isOpen={click}>
              <ShowFilterWrap>
                <FiltersDiv>
                  <Filters>Filters </Filters>
                </FiltersDiv>
                <FiltersTextWrap>
                  <FiltersText>
                    State{" "}
                    <Arrow>
                      <IoMdArrowDropdown />
                    </Arrow>
                  </FiltersText>
                </FiltersTextWrap>
                <FiltersTextWrap>
                  <FiltersText>
                    City
                    <Arrow>
                      <IoMdArrowDropdown />
                    </Arrow>
                  </FiltersText>
                </FiltersTextWrap>
              </ShowFilterWrap>
            </ShowFilter>
          </Sect>
          {rides.map((ride) => (
            <Map key={ride.id} ride={ride} user={user} />
          ))}
        </Container>
      </Pad>
    </SectWrap>
  );
};

export default Section;
