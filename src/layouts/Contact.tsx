import styled, { keyframes } from "styled-components";
import {
  BigTitle,
  ErrorMessage,
  Main,
  Paragraph,
  PartWrap,
  SmallTitle,
  SubTitle,
  Title,
} from "../StyleReusable/base";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";

const ContainerContactText = styled.div`
  width: 30%;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  @media only screen and (min-width: 600px) {
    width: 80%;
  }
`;
const ContactForm = styled.form`
  display: block;
  width: 40%;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 5%;
  margin-right: 100px;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    width: 100%;
    margin: auto;
  }
  @media only screen and (min-width: 600px) {
    width: 80%;
  }
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
  @media only screen and (max-width: 600px) {
    height: 40px;
  }
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
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
  });
  const [validationMessage, setValidationMessage] = useState({
    name: "",
    email: "",
  });

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const hasNumberOrSpecialChar = /[^a-zA-ZÀ-ž\s]/;
    setContactData((prev) => ({ ...prev, [name]: value }));

    if (contactData.email !== "" && !contactData.email.includes("@")) {
      setValidationMessage((prev) => ({
        ...prev,
        email: "Your email should contain @",
      }));
      console.log();
    } else if (contactData.email !== "" && !contactData.email.includes(".")) {
      setValidationMessage((prev) => ({
        ...prev,
        email: "Your email address is missing the domain",
      }));
    } else if (hasNumberOrSpecialChar.test(contactData.name)) {
      setValidationMessage((prev) => ({
        ...prev,
        name: "special characters are not allow in the name field",
      }));
    } else {
      setValidationMessage((prev) => ({
        ...prev,
        name: "",
        email: "",
      }));
    }
  };
  console.log(contactData);
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
          <Input
            type="text"
            placeholder="John Does"
            name="name"
            onChange={handleForm}
          />
          <ErrorMessage>{validationMessage.name}</ErrorMessage>
          <Label>Email</Label>
          <Input
            name="email"
            onChange={handleForm}
            type="email"
            placeholder="johndoes@example.com"
          />
          <ErrorMessage>{validationMessage.email}</ErrorMessage>
          <Label>Message</Label>
          <TextArea placeholder="Type your message" name="message" />

          <Submit theme={theme}>Send</Submit>
        </ContactForm>
      </PartWrap>
    </Main>
  );
};
export default Contact;
