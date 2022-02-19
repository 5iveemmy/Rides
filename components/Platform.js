import Image from "next/image";
import styled from "styled-components";

// STyled components
const Body = styled.div`
  background-color: #101010;
  color: #fff;
`;

const BodyWrap = styled.div``;

const EdvWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Edv = styled.div``;

const Left = styled.div``;

const LeftText = styled.h1``;

const Right = styled.div``;

const Platform = () => {
  return (
    <Body>
      <BodyWrap>
        <Edv>
          <EdvWrap>
            <Left>
              <LeftText>Edvora</LeftText>
            </Left>
            <Right>
              <Image src="/avi.png" alt="avatar" width={44} height={44} />
            </Right>
          </EdvWrap>
        </Edv>
      </BodyWrap>
    </Body>
  );
};

export default Platform;
