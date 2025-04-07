import styled from "styled-components";
import "font-awesome/css/font-awesome.min.css";
import { Icon } from "@iconify/react";
import {
  BigTitle,
  Box,
  Main,
  Paragraph,
  PartWrap,
  SubTitle,
  Title,
} from "../StyleReusable/base";
const ContainerPartLeft = styled.div`
  width: 45%;
`;
const ContainerPartRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 45%;
`;
const ContainerIcon = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const Skills = () => {
  return (
    <Main>
      <PartWrap>
        <ContainerPartLeft>
          <BigTitle> Skills</BigTitle>
          <Title>
            "Intellectual growth should commence at birth and cease only at
            death."
          </Title>
          <Paragraph>
            I think of learning as a lifelong path. With time and dedication,
            any skill can be mastered. It is marked by the ongoing ability to
            change, to transform. With these skills, I as of now have, I remain
            committed to learning my profession. On one hand, I may be more
            remarkable than on the other. On the other hand, I see myself as a
            work in progress
          </Paragraph>
          <SubTitle> — Albert Einstein</SubTitle>
        </ContainerPartLeft>
        <ContainerPartRight>
          <Box>
            <Title>Front-End</Title>
            <ContainerIcon>
              <Icon icon="cib:csswizardry" width="70" height="70" />
              <Icon icon="cib:html5" width="70" height="70" />
              <Icon icon="cib:react" width="70" height="70" />
              <Icon icon="cib:javascript" width="70" height="70" />
              <Icon icon="cib:typescript" width="70" height="70" />
              <Icon icon="cib:redux" width="70" height="70" />
              <Icon icon="cib:sass" width="70" height="70" />
              <Icon icon="cib:bootstrap" width="70" height="70" />
            </ContainerIcon>
          </Box>
          <Box>
            <Title>Back-End</Title>
            <ContainerIcon> Work in progress: still learning</ContainerIcon>
          </Box>
        </ContainerPartRight>
      </PartWrap>
    </Main>
  );
};
export default Skills;
