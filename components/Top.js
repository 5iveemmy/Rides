import Image from "next/image";
import styled from "styled-components";
import { Container } from "../style/global";

const TopWrap = styled.div`
  background-color: #101010;
  color: #fff;
`;

const ForTop = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Edv = styled.div``;

const EdvText = styled.h1``;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 11rem;
`;

const AvatarText = styled.h4``;

const Top = () => {
  return (
    <TopWrap>
      <Container>
        <ForTop>
          <Edv>
            <EdvText>Edvora</EdvText>
          </Edv>
          <Avatar>
            <AvatarText>Dhruv Singh</AvatarText>
            <Image src="/avi.png" alt="avatar" width={44} height={44} />
          </Avatar>
        </ForTop>
      </Container>
    </TopWrap>
  );
};

export default Top;
