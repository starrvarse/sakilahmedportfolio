import Image from 'next/image';

const skills = [
  'HTML.png', 'CSS.png', 'Javascript.svg', 'React.png', 'NodeJs.svg',
  'Next.svg', 'Redux.svg', 'Tailwind.png', 'Bootstrap.svg', 'MaterialUI.svg',
  'Express.png', 'Git.svg', 'Github.svg', 'Graphql.svg', 'MongoDB.svg',
  'Vercel.svg', 'ChartJs.svg', 'Bash.svg', 'Docker.svg', 'K8s.svg'
];

const SkillsSection = () => {
  return (
    <div id="skills" className="container skills-container">
      <div className="skill-fade-text">Skills</div>

      <div className="skill-container-left">
        <h2 className="skill-heading">
          <span className="caps">M</span>e and
          <br />
          MyTech Stack
        </h2>

        <div className="skill-subHeading">
          <p>
            Hi Everyone ! I&apos;m Sakil Ahmed, a Software Engineering Fellow at Headstarter AI, 
            and I&apos;m thrilled to share my newly launched portfolio website with you all! 
            I am an aspiring Full Stack Web Developer. Currently I am working on Spring boot, 
            NextJs and Making Beautiful UI-UX are my few features
          </p>
        </div>
      </div>

      <div className="skill-container-right">
        <Image 
          src="/images/userAsset/blob vector.png" 
          alt="Blob Vector" 
          width={400} 
          height={400} 
          className="blob-style" 
        />

        {skills.map((skill, index) => (
          <Image
            key={index}
            src={`/images/stack/${skill}`}
            alt={skill.split('.')[0]}
            width={90}
            height={90}
            className="skills-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;