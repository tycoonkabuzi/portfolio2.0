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
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  color: #111827;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const Thead = styled.thead`
  background-color: #1f2937;
  color: white;
  text-align: left;
`;

const Th = styled.th`
  padding: 12px 16px;
`;

const Td = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #f9fafb;
    transition: background 0.2s ease-in-out;
  }
`;

const ActionButton = styled.button`
  background-color: #b73f3f;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  font-size: 13px;

  &:hover {
    background-color: darkred;
  }
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

  const deleteProject = async (projectId, projectPicture) => {
    try {
      await axios.delete(
        `http://localhost:8080/projects/${projectId}/${projectPicture}`
      );
      console.log("deleted successfully");
    } catch (error) {
      console.log("Something happen when trying to delete" + error);
    }
  };
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
            <Option value="React + typescript + styled-components + Express + MongoDB ">
              React+ typescript + styled-components+ Express+ MongoDB
            </Option>
            <Option value="HTML + css + Js">HTML + css + Js</Option>
            <Option value="React + Sass ">React + Sass</Option>
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

        {dataFromDataBase.length !== 0 ? (
          <StyledTable border="1" cellspacing="0" cellpadding="8">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Type</Th>
                <Th>Link</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>

            {dataFromDataBase.map((project) => (
              <tbody>
                <Tr>
                  <Td>{project.title}</Td>
                  <Td>{project.description}</Td>
                  <Td>{project.type}</Td>
                  <Td>{project.link}</Td>
                  <Td style={{ display: "flex" }}>
                    <button>Edit</button>
                    <button
                      onClick={() => deleteProject(project._id, project.image)}
                    >
                      Delete
                    </button>
                  </Td>
                </Tr>
              </tbody>
            ))}
          </StyledTable>
        ) : (
          <p> No project uploaded yet</p>
        )}
      </ContainerUploaded>
    </Main>
  );
};
export default UploadProject;
