import axios from "axios";
import { useEffect, useState } from "react";
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
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    link: "",
    image: "",
  });

  const [dataFromDataBase, setDataFromDataBase] = useState([]);
  const isActive = location.pathname.includes("project");

  useEffect(() => {
    if (isActive) {
      setActive((prev) => ({
        ...prev,
        projects: isActive,
      }));
    }
  }, [location.pathname]);

  const handleProjectForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const files = e.target.files;
    setFormData((prev) => {
      if (name === "image") {
        return { ...prev, [name]: files[0] };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const uploadProject = () => {
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("type", formData.type);
      data.append("link", formData.link);

      if (formData.image) data.append("image", formData.image);

      axios.post("http://localhost:8080/projects", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Information sent");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/projects");
        setDataFromDataBase(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <Main>
      <ContainerUpload>
        <Title>Upload New Project</Title>
        <Form>
          <Label htmlFor="">Title: </Label>
          <Input type="text" name="title" onChange={handleProjectForm} />
          <Label htmlFor="">Description:</Label>
          <Textarea name="description" onChange={handleProjectForm} />
          <Label htmlFor="">Type:</Label>
          <Select name="type" id="" onChange={handleProjectForm}>
            <Option value="">Web</Option>
            <Option value="">Js</Option>
          </Select>

          <Label htmlFor="">Link: </Label>
          <Input type="text" name="link" onChange={handleProjectForm} />
          <Label htmlFor="">Image:</Label>

          <Input
            type="file"
            name="image"
            onChange={handleProjectForm}
            accept="image/*"
          />

          <Button
            onClick={(e) => {
              e.preventDefault();
              uploadProject();
            }}
          >
            Submit
          </Button>
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
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          {dataFromDataBase.map((project) => (
            <tbody>
              <tr>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.type}</td>
                <td>{project.link}</td>
                <td style={{ display: "flex" }}>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </ContainerUploaded>
    </Main>
  );
};
export default UploadProject;
