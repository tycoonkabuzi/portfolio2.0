import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
const Main = styled.div`
  background-color: white;
  margin-left: 25%;
  padding: 5%;
`;
const ContainerUpload = styled.div``;
const ContainerUploaded = styled.div``;
const Title = styled.h1`
  color: black;
`;
const Form = styled.form`
  width: 80%;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
`;
const Label = styled.label`
  width: 20%;
  margin-bottom: 10px;
  display: block;
`;
const Input = styled.input`
  width: 60%;
  margin-bottom: 10px;
`;
const Select = styled.select`
  width: 60%;
  margin-bottom: 10px;
`;
const Option = styled.option``;
const Textarea = styled.textarea`
  width: 60%;
  margin-bottom: 10px;
  height: 150px;
`;
const Button = styled.button`
  background-color: #b73f3f;
  border: none;
  color: white;
  padding: 10px;
  margin-top: 40px;
`;
const UploadProject = ({ active, setActive }) => {
  const location = useLocation();
  const isActive = location.pathname.includes("project");

  useEffect(() => {
    if (isActive) {
      setActive((prev) => ({
        ...prev,
        projects: isActive,
      }));
    }
  }, [location.pathname]);

  return (
    <Main>
      <ContainerUpload>
        <Title>Upload New Project</Title>
        <Form>
          <Label htmlFor="">Title: </Label>
          <Input type="text" />
          <Label htmlFor="">Description:</Label>
          <Textarea />
          <Label htmlFor="">Type:</Label>
          <Select name="" id="">
            <Option value="">Web</Option>
            <Option value="">Js</Option>
          </Select>

          <Label htmlFor="">Link: </Label>
          <Input type="text" />
          <Label htmlFor="">Image:</Label>

          <Input type="file" accept="image/*" />

          <Button>Submit</Button>
        </Form>
      </ContainerUpload>
      <ContainerUploaded>
        <br />
        <Title> Uploaded Projects</Title>

        <br />

        <table border="1" cellspacing="0" cellpadding="8">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Type</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Restaurant 2.0</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                odit possimus aliquam distinctio illo. Facilis iste doloremque
                consequuntur itaque ipsum, architecto distinctio eos illum sint
                vel animi ab, commodi quis.
              </td>
              <td>React,Js</td>
              <td>No</td>
              <td style={{ display: "flex" }}>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Rortfolio</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                odit possimus aliquam distinctio illo. Facilis iste doloremque
                consequuntur itaque ipsum, architecto distinctio eos illum sint
                vel animi ab, commodi quis.
              </td>
              <td>React,Js, Express, Mongo DB</td>
              <td>Yes</td>
              <td style={{ display: "flex" }}>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Restaurant 2.0</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                odit possimus aliquam distinctio illo. Facilis iste doloremque
                consequuntur itaque ipsum, architecto distinctio eos illum sint
                vel animi ab, commodi quis.
              </td>
              <td>React,Js</td>
              <td>Yes</td>
              <td style={{ display: "flex" }}>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerUploaded>
    </Main>
  );
};
export default UploadProject;
