export interface Project {
  id: number;
  title: string;
  description: string;
  number: string;
  align: 'left' | 'right';
  skills: string[];
}

export interface ProjectCardProps {
  project: Project;
}