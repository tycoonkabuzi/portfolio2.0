import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { UploadProjectProps, Project } from "../../types/activeState";

const Main = styled.div`
  background-color: white;
  margin-left: 20%;
  padding: 5%;
`;

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
  display: block;
  margin-bottom: 10px;
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
  cursor: pointer;
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

// ✅ Define formData type
type ProjectFormData = {
  title: string;
  description: string;
  type: string;
  link: string;
  image: string | File; // <-- Fix here
};

const UploadProject = ({ setActive }: UploadProjectProps) => {
  const location = useLocation();
  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    description: "",
    type: "",
    link: "",
    image: "",
  });
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (location.pathname.includes("projects")) {
      setActive((prev) => ({ ...prev, projects: true }));
    }
  }, [location.pathname, setActive]);

  const handleProjectForm = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const files = (e.target as HTMLInputElement).files;

    setFormData(
      (prev) =>
        name === "image" && files
          ? { ...prev, [name]: files[0] } // File
          : { ...prev, [name]: value } // string
    );
  };

  const uploadProject = async () => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        data.append(key, value); // Blob
      } else if (typeof value === "string" && value.trim() !== "") {
        data.append(key, value); // string
      }
    });

    try {
      await axios.post("http://localhost:8080/projects", data);
      // Optionally: reload projects after upload
      const res = await axios.get("http://localhost:8080/projects");
      setProjects(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteProject = async (id: string, filename: string | File) => {
    try {
      await axios.delete(`http://localhost:8080/projects/${id}/${filename}`);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/projects")
      .then((res) => setProjects(res.data));
  }, []);

  return (
    <Main>
      <Title>Upload New Project</Title>
      <Form>
        <Label>Title:</Label>
        <Input name="title" onChange={handleProjectForm} />
        <Label>Description:</Label>
        <Textarea name="description" onChange={handleProjectForm} />
        <Label>Type:</Label>
        <Select name="type" onChange={handleProjectForm}>
          <Option value="React + TS + SC + Express + MongoDB">
            React + TS + SC + Express + MongoDB
          </Option>
          <Option value="HTML + CSS + JS">HTML + CSS + JS</Option>
          <Option value="React + Sass">React + Sass</Option>
        </Select>
        <Label>Link:</Label>
        <Input name="link" onChange={handleProjectForm} />
        <Label>Image:</Label>
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

      <Title>Uploaded Projects</Title>
      {projects.length ? (
        <StyledTable>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Type</Th>
              <Th>Link</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <tbody>
            {projects.map((p) => (
              <Tr key={p._id}>
                <Td>{p.title}</Td>
                <Td>{p.description}</Td>
                <Td>{p.type}</Td>
                <Td>
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {p.link}
                  </a>
                </Td>
                <Td>
                  <Td>
                    <Td>
                      <Button onClick={() => deleteProject(p._id, p.image)}>
                        Delete
                      </Button>
                    </Td>
                  </Td>
                </Td>
              </Tr>
            ))}
          </tbody>
        </StyledTable>
      ) : (
        <p>No project uploaded yet</p>
      )}
    </Main>
  );
};

export default UploadProject;
