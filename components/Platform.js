import styled from "styled-components";
import Section from "./Section";
import Top from "./Top";

// STyled components
const Body = styled.div`
  color: white;
`;

const Platform = () => {
  return (
    <Body>
      <Top />
      <Section />
    </Body>
  );
};

export default Platform;
