import styled from "styled-components";
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
import { useEffect, useState } from "react";

// Styled components
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

const Submit = styled.button<{ theme: any }>`
  background-color: ${(props) => props.theme["--btn-color"]};
  padding: 10px 40px;
  border: none;
  border-radius: 10px;
  color: white;
  &:hover {
    background-color: ${(props) => props.theme["--btn-color-hover"]};
    color: white;
  }
`;

// Types
interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface ValidationMessage {
  name: string;
  email: string;
}

const Contact = () => {
  const { theme } = useTheme();

  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    email: "",
    message: "",
  });

  const [validationMessage, setValidationMessage] = useState<ValidationMessage>(
    {
      name: "",
      email: "",
    }
  );

  useEffect(() => {
    document.title = "Contact";
  }, []);

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));

    const hasNumberOrSpecialChar = /[^a-zA-ZÀ-ž\s]/;

    if (name === "email") {
      if (value && !value.includes("@")) {
        setValidationMessage((prev) => ({
          ...prev,
          email: "Your email should contain @",
        }));
      } else if (value && !value.includes(".")) {
        setValidationMessage((prev) => ({
          ...prev,
          email: "Your email address is missing the domain",
        }));
      } else {
        setValidationMessage((prev) => ({ ...prev, email: "" }));
      }
    }

    if (name === "name") {
      if (hasNumberOrSpecialChar.test(value)) {
        setValidationMessage((prev) => ({
          ...prev,
          name: "Special characters are not allowed in the name field",
        }));
      } else {
        setValidationMessage((prev) => ({ ...prev, name: "" }));
      }
    }
  };

  return (
    <Main theme={theme}>
      <BigTitle theme={theme}>Contact</BigTitle>
      <PartWrap>
        <ContainerContactText>
          <Title theme={theme}>If you want to reach out to me</Title>
          <SubTitle theme={theme}>
            “Alone we can do so little; together we can do so much.”
          </SubTitle>
          <Paragraph theme={theme}>
            I’m always open to new opportunities and meaningful conversations.
            Whether you’d like to discuss a project, explore an idea, or hire me
            — feel free to reach out. Let’s build something impactful together.
          </Paragraph>
          <SmallTitle theme={theme}> — Helen Keller</SmallTitle>
        </ContainerContactText>

        <ContactForm>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={contactData.name}
            onChange={handleForm}
          />
          <ErrorMessage theme={theme}>{validationMessage.name}</ErrorMessage>

          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@example.com"
            value={contactData.email}
            onChange={handleForm}
          />
          <ErrorMessage theme={theme}>{validationMessage.email}</ErrorMessage>

          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Type your message"
            value={contactData.message}
            onChange={handleForm}
          />

          <Submit theme={theme}>Send</Submit>
        </ContactForm>
      </PartWrap>
    </Main>
  );
};

export default Contact;
