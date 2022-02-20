const Details = styled.p`
  font-size: 15px;
  padding-bottom: 1rem;
`;

const DitSpan = styled.span`
  color: #d0cbcb;
`;

const Detail = ({
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
    <>
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
    </>
  );
};

export default Detail;
