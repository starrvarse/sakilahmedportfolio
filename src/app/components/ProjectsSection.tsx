import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Project, ProjectCardProps } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Tint & Orange",
    description: "Its is a car modification company which provide you sheets to protect your car from scratch",
    number: "01",
    align: "right",
    skills: [
      "HTML.png", "CSS.png", "Javascript.svg", "Express.png", "NextJsCircle.png",
      "Tailwind.png", "NodeJs.svg", "MongoDB.svg", "Redux.svg", "Vercel.svg"
    ]
  },
  {
    id: 2,
    title: "Breaking Copyrights",
    description: "A platform to download copyrights free youtube music",
    number: "02",
    align: "left",
    skills: [
      "HTML.png", "CSS.png", "Javascript.svg", "NextJsCircle.png",
      "Tailwind.png", "Redux.svg", "Vercel.svg"
    ]
  },
  {
    id: 3,
    title: "Isha Tattva",
    description: "A Website for interior designer to showcase her works and samples",
    number: "03",
    align: "right",
    skills: [
      "HTML.png", "CSS.png", "Javascript.svg", "NextJsCircle.png",
      "Tailwind.png", "Vercel.svg"
    ]
  },
  {
    id: 4,
    title: "Granit",
    description: "A architectural website to plan your building or home (Hebrew Language)",
    number: "04",
    align: "left",
    skills: [
      "NextJsCircle.png", "Tailwind.png", "Vercel.svg"
    ]
  }
];

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="project-card" id={`project${project.id}`}>
    <div className={`project-number project-number-${project.align}`}>{project.number}</div>
    <div className={`project-content project-content-${project.align}`}>
      <div className="project-skills-container">
        {project.skills.map((skill, index) => (
          <Image 
            key={index}
            src={`/images/stack/${skill}`}
            alt={skill}
            width={40}
            height={40}
            className="project-skill"
          />
        ))}
      </div>

      <h2 className="project-heading">{project.title}</h2>
      <p className="project-subHeading">{project.description}</p>
      
      <div className="btn-grp">
        <button className="btn-pink btn-project">Read More</button>
        <a href="#" title="GitHubLink">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="#" title="Live Link">
          <FontAwesomeIcon icon={faLink} className="icon" />
        </a>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <div className="project-section" id="projects">
      <h2 className="page-header">Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;