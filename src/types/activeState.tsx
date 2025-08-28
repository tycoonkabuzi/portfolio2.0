export interface ActiveState {
  home: boolean;
  projects: boolean;
  skills: boolean;
  contact: boolean;
}

export interface UploadProjectProps {
  active: ActiveState; // use full ActiveState
  setActive: React.Dispatch<React.SetStateAction<ActiveState>>; // update full state
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  type: string;
  link: string;
  image: string | File;
}
