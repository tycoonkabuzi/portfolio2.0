import styled from "styled-components";
import {
  BigTitle,
  Main,
  Paragraph,
  PartWrap,
  SmallTitle,
  SubTitle,
  Title,
} from "../StyleReusable/base";
import { useTheme } from "../contexts/ThemeContext";

const ContainerContactText = styled.div`
  width: 30%;
`;
const ContactForm = styled.form`
  width: 40%;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 40px;
  margin-right: 100px;
`;
const Label = styled.label`
  font-size: 14px;
`;
const Input = styled.input`
  width: 100%;
  height: 25px;
  border-radius: 7px;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  margin-bottom: 10px;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 7px;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: 20px;
`;
const Submit = styled.button`
  background-color: ${(props) => props.theme["--btn-color"]};
  padding: 10px 40px 10px 40px;
  border: none;
  border-radius: 10px;
  color: white;
  &:hover {
    background-color: ${(props) => props.theme["--btn-color-hover"]};
    color: white;
  }
`;

const Contact = () => {
  const { theme } = useTheme();

  return (
    <Main theme={theme}>
      <BigTitle theme={theme}>Contact</BigTitle>
      <PartWrap>
        <ContainerContactText>
          <Title theme={theme}>If you wanna reach out to me </Title>
          <SubTitle theme={theme}>
            “Alone we can do so little; together we can do so much.”
          </SubTitle>

          <Paragraph theme={theme}>
            I’m always open to new opportunities and meaningful conversations.
            Whether you’d like to discuss a project, explore an idea, or to hire
            me — feel free to reach out. Let’s build something impactful
            together.
          </Paragraph>
          <SmallTitle theme={theme}> — Helen Keller</SmallTitle>
        </ContainerContactText>
        <ContactForm>
          <Label>Name</Label>
          <Input type="text" placeholder="John Does" />
          <Label>Email</Label>
          <Input type="email" placeholder="johndoes@example.com" />
          <Label>Message</Label>
          <TextArea placeholder="Type your message" />

          <Submit theme={theme}>Send</Submit>
        </ContactForm>
      </PartWrap>
    </Main>
  );
};
export default Contact;
